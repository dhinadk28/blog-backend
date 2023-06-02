const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Dhinadk28:Dhinadk28@cluster0.8o2pt1u.mongodb.net/blogi").then(()=>{
    console.log("connected!");
}).catch((err)=>{
    console.log("error");
})