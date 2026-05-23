const mongoose=require("mongoose");

const blackListingSchema=new mongoose.Schema({
    token:{
        type:String,
        required:[true,"The token is needed to be added to the blacklist"],
        unique:[true,"The token should be unique to be added to the blacklist"]
    },
    blackListedAt:{
        type:Date,
        default: Date.now,
        immutable:[true,"The token added to the blackListing should not be changed"]
    }
})

blackListingSchema.index({blackListedAt:1},{
    expireAfterSeconds:60*60*24*3 //3 days
});

const BlackList=mongoose.model("BlackList",blackListingSchema);

module.exports=BlackList;