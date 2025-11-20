// if(process.env.NODE_ENV!="production"){
  require('dotenv').config();
// }

const express=require("express");
const app=express();
const port=8080;
const mongoose=require('mongoose');
app.use(express.json());
const dbUrl=process.env.ATLAS_DB;

const path=require("path");
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate");
const ExpressError=require("./utils/ExpressError.js");
const listingsRouter=require("./routes/listing.js");
const reviewsRouter=require("./routes/review.js");
const userRouter=require("./routes/user.js");
const session=require("express-session");
const MongoStore=require("connect-mongo");
const flash=require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/user.js");


main()
.then(()=>{
  console.log(dbUrl);
  console.log("connected to DB");
})
 .catch((err)=>{
  console.log(err);
 });

 async function main(){
  await mongoose.connect(dbUrl);
 }

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

// const store = MongoStore.create({
//   mongoUrl: dbUrl,  // MongoStore will handle connecting itself
//   crypto: { secret: "secret234" },
//   touchAfter: 24*3600,
// });

const store = MongoStore.create({
  mongoUrl: dbUrl,
  mongoOptions: {
    retryWrites: true,
    w: "majority"
  },
  collectionName: "sessions",
  ttl: 14 * 24 * 60 * 60,
});

store.on("error", function (e) {
  console.log("MongoStore connection error:", e);
});

const sessionOptions={
  store,
  secret:process.env.SECRET,
  resave:false,
  saveUninitialized:false,
  cookie:{
    expires:Date.now()+7*24*60*60*1000,
    httpOnly:true,
  }
}

app.get("/",(req,res)=>{
  res.send('Hi, welcome to home directory')
});


app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());


passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
  res.locals.success=req.flash("success");
   res.locals.error=req.flash("error");
   res.locals.currUser=req.user;
  // console.log(res.locals.success);
  next();
})


// app.get("/demouser",async(req,res)=>{
//   let fakeUser=new User({
//     email:"fakery1234@gmail.com",
//     username:"Netaa"
//   });
//   let registeredUser= await User.register(fakeUser,"helloji");//(userobj,password)
//   res.send(registeredUser);
// })

// in app.js
app.use((req, res, next) => {
  res.locals.mapToken = process.env.MAP_TOKEN;
  next();
});



app.use("/listings",listingsRouter);
app.use("/listings/:id/reviews",reviewsRouter);
app.use("/",userRouter);

//our story
app.get("/our",(req,res)=>{
  res.render("listings/our");
})

//privacy
app.get("/privacy",(req,res)=>{
  res.render("footer/privacy");
})

//terms
app.get("/terms",(req,res)=>{
  res.render("footer/terms");
})
// app.get("/testListing",async(req,res)=>{
//   const testListing=new Listing({
//     name:"Bhoora",
//     desc:"Found wandering the streets of Jaisalmer, Bhoora was heartbreakingly left behind when his previous owners relocated and couldn’t take him along. Despite his rough start, he remains gentle, loyal, and full of love to give.Now safe and cared for, this sweet pup is ready to find a forever family—or a kind foster—to show him the warmth and stability he truly deserves. Could you be the one to give Bhoora his second chance at happiness?",
//     age:2,
//     gender:"Female",
//     location:"Bangalore",
//   });
//   await testListing.save();
//   console.log("Sample saved in db");
//   res.send("successful testing");
// });



app.all("*",(req,res,next)=>{
  next(new ExpressError(404,"Paeg not found!"));
})

// app.use((err,req,res,next)=>{
//    if (res.headersSent) {
//     return next(err);
//   }
//   let {statusCode=500,message="Sometign went wrong!"}=err;
//   return res.status(statusCode).render("listings/error.ejs",{message})
//   // res.status(statusCode).send(message);
// })

app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);

  // Log the full error stack to the console
  console.error(err.stack);

  const { statusCode = 500, message = "Something went wrong!" } = err;

  // You can also pass the stack to the template (optional)
  res.status(statusCode).render("listings/error.ejs", { 
    message,
    stack: err.stack 
  });
});

app.listen(port,()=>{
  console.log(`Server is listening:localhost:${port}`);
})