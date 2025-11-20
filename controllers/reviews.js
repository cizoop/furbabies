const Listing=require("../models/listing.js");
const Review=require("../models/reviews.js");


module.exports.createReview=async(req,res)=>{
  let listing= await Listing.findById(req.params.id);
  let newReview= new Review(req.body.review);
  newReview.author=req.user._id;
  listing.reviews.push(newReview);
  await newReview.save();
  await listing.save();
  console.log("NEW review saved");
  // res.send("new review saved");
  req.flash("success","New Review Created!");//creating new success k-v pair
  res.redirect(`/listings/${listing._id}`);
}

module.exports.destroyReview=async(req,res)=>{
  let{id,reviewId}=req.params;
  await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
  await Review.findByIdAndDelete(reviewId);
  req.flash("success","New Review Deleted!");//creating new success k-v pair
  res.redirect(`/listings/${id}`);
}