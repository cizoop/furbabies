const Listing = require("../models/listing.js");
const maptilerClient = require('@maptiler/client');
maptilerClient.config.apiKey = process.env.MAP_TOKEN;

module.exports.index=async (req, res) => {
  const allListings = await Listing.find({});

  res.render("listings/index", { allListings });
}


module.exports.rendernewForm=(req, res) => {
  res.render("listings/new");
}

module.exports.showListing=async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path:"reviews",
    populate:{
      path:"author",
    }
})
    .populate("owner");
  // console.log(listing);
  if (!listing) {
    req.flash("error", "Listing u requested does not exist!");
    res.redirect("/listings");
  }
 res.render("listings/show.ejs", { listing });
}

module.exports.createListing=async (req, res,next) => {
    // let listing=req.body.listing;
 const result = await maptilerClient.geocoding.forward(
      req.body.listing.location,
      { limit: 1 }
    );
   const geometry = result.features[0].geometry;
    let url=req.file.path;
    let filename=req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image={url,filename};
    newListing.geometry= geometry;
    newListing.category=req.body.listing.category;
    let savedListing=await newListing.save();
    console.log(savedListing);
    req.flash("success", "New Listing Created!"); //creating new success k-v pair
    res.redirect("/listings");
  };

module.exports.editListing=async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", "Lisitng u are requested is not available");
      res.redirect("/listings");
    }
    let originalImgurl=listing.image.url;
    originalImgurl=  originalImgurl.replace("/upload","/upload/w_250");
   res.render("listings/edit.ejs", { listing,originalImgurl });
  };  

module.exports.updateListing=async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findByIdAndUpdate(id, {
      ...req.body.listing,
    });
    if(typeof req.file !=undefined){
      let url=req.file.path;
      let filename=req.file.filename;
      listing.image={url,filename};
      await listing.save();
    }
    req.flash("success", "Listing Updated!"); //creating new success k-v pair
    res.redirect(`/listings/${id}`);
  };  

module.exports.deleteListing=async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted!"); //creating new success k-v pair
  return  res.redirect("/listings");
  };  


  module.exports.listingsGenAge = async (req, res) => {
  const { gender = "all", age = "all" } = req.query;

  let filter = {};

  // Gender filter
 if (gender !== "all") {
  filter.gender = new RegExp(`^${gender}$`, "i"); // case-insensitive match
}


  // Age filter (convert age groups to numeric ranges)
   if (age !== "all") {
    if (age === "baby") {
      filter.age = { $gte: 1, $lte: 2 };
    } else if (age === "adult") {
      filter.age = { $gt: 2, $lte: 5 };
    } else if (age === "senior") {
      filter.age = { $gt: 5 };
    }
  }

  const listings = await Listing.find(filter);
  console.log(listings);
  res.render("listings/listingsGenAge.ejs", { listings });
};

module.exports.adoptme=async(req,res)=>{
  res.render("listings/adoptme")
}

