const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController=require("../controllers/listing.js");
const multer=require('multer');
const {storage}=require("../cloudConfig.js");
const upload=multer({storage});
//middleware to validate listings
// const validateListing = (req, res, next) => {
//   let { error } = listingSchema.validate(req.body);

//   if (error) {
//     let errMsg = error.details.map((el) => el.message).join(",");
//     throw new ExpressError(400, errMsg);
//   } else {
//     next();
//   }
// };

router.get("/new", isLoggedIn,listingController.rendernewForm);
router.get("/listingsGenAge", listingController.listingsGenAge);
router.get("/adoptme",listingController.adoptme);

router.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn,
  upload.single("listing[image]"),
  validateListing,
  wrapAsync(listingController.createListing)
);
// .post(upload.single("listing[image]"),(req,res)=>{
//   res.send(req.file);
// });

router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn,
  isOwner,
  upload.single("listing[image]"),
  validateListing,
  wrapAsync(listingController.updateListing)
)
.delete( isLoggedIn,
  wrapAsync(listingController.deleteListing)
);




//index-show all listings
// router.get("/", wrapAsync(listingController.index));




//new route
//show route individual
// router.get("/:id", wrapAsync(listingController.showListing));

//Create route
// router.post(
//   "/",
//   isLoggedIn,
//   validateListing,
//   wrapAsync(listingController.createListing)
// );

//edit route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.editListing)
);

//update
// router.put(
//   "/:id",
//   isLoggedIn,
//   isOwner,
//   validateListing,
//   wrapAsync(listingController.updateListing)
// );

//delete
// router.delete(
//   "/:id",
//   isLoggedIn,
//   wrapAsync(listingController.deleteListing)
// );



module.exports = router;
