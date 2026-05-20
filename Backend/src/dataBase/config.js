const mongoose=require("mongoose");

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Data Base Connected");
    }catch(error){
        console.error(error);
        process.exit(1);
    }
}

module.exports={connectDB};