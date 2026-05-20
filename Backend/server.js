const {connectDB}=require("./src/dataBase/config");
const app=require("./src/app");
require("dotenv").config();
connectDB();
app.listen(5000,()=>{
    console.log("The server is running in the 5000 port");
})