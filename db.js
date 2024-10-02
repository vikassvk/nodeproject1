const mongoose = require('mongoose');
require('dotenv').config();
// const mongoUrl = process.env.DBURL;
const mongoUrl = process.env.MONGODBATLASURL;
// const mongoUrl = "mongodb://localhost:27017/student";

mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.on('connection',()=>{
    console.log("db connected");

});

db.on('disconnection',()=>{
    console.log("db disconnected");
    
})
const first =()=>{
    console.log("imported");
}


module.exports = db;
