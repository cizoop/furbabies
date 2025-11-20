const Joi = require('joi');
module.exports.listingSchema=Joi.object({
  listing:Joi.object({
    name:Joi.string().required(),
    desc:Joi.string().required(),
    image:Joi.string().allow("",null),
    age:Joi.number().required().min(1),
    gender:Joi.string().required(),
    location:Joi.string().required(),
    category:Joi.string().required()
  }).required()
})

module.exports.reviewSchema=Joi.object({
  review:Joi.object({
    rating:Joi.number().required().min(1).max(5),
    comment:Joi.string().required()
  }).required()
})