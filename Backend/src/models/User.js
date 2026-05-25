const mongoose=require("mongoose");
const bcrypt=require("bcrypt");

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"email must be unique"],
        lowercase:true,
        trim:true,
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"please fill a valid email address"]
    },
    name:{
        type:String,
        required:[true,"name is required"],
        trim:true
    },
    password:{
        type:String,
        required:[true,"password is required"],
        minlength:[6,"password must be at least 6 characters long"],
        select:false
    }},{
        timestamps:true
    }
)

userSchema.pre("save", async function() {
  if(!this.isModified('password')){
    return;
  }
   const salt=await bcrypt.genSalt(10);
  this.password=await bcrypt.hash(this.password,salt);
})
userSchema.methods.comparePassword=async function(userPassword){
    return bcrypt.compare(userPassword, this.password);
}

const User=mongoose.model("User",userSchema);
module.exports=User;