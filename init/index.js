const mongoose=require('mongoose');
const initData=require('./data.js');
const MONGO_URL="mongodb://127.0.0.1:27017/fur";
const Listing=require("../models/listing.js");
main()
.then(()=>{
  console.log("connected to DB");
})
.catch(err=>{
  console.log(err);
})

async function main(){
  await mongoose.connect(MONGO_URL);
} 

const initDB=async()=>{
  await Listing.deleteMany({});
  // initData.data=initData.data.map((obj)=>({...obj,owner:"690a5bc1c412325e655eb31e"}));
  await Listing.insertMany(initData.data);
  console.log("Data was initialized");
}

initDB();