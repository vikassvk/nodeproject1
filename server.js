const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./db');
require('dotenv').config();
const PORT = process.env.PORT || 4000;
const router = express.Router;


const hellorouter = require('./routes/route');
app.use('/',hellorouter);
app.use('/',hellorouter);

const jsonParser = express.json();
const urlencodedParser = express.urlencoded({ extended: true });

app.use(jsonParser);
app.use(urlencodedParser);
// let body_parser =  require('body-parser');


// app.use(body_parser);

// app.use(body_parser.urlencoded);

const student = require('./studentmodel');
const bodyParser = require('body-parser');
// console.log(student);




app.get('/', (req, res) => {
    res.send("server is running");
});

app.post('/create', async(req,res)=>{

 try{
    const data =  req.body;


  

    const newstudent = new student(data);

    const response = await newstudent.save();
    console.log(response);
    res.send("new student created");


 }
 catch(error){
    console.log(error);
 }
})

app.get("/read", async(req,res)=>{
try{
    // const id = req.params.id;

    const response =  await student.find();
    res.send(response);

}catch(err){
    console.log(err);
}

    // res.send("person found");
}
);

app.post("/update/:id", async(req,res)=>{
    try {
        const id = req.params.id;
        const response = await student.findByIdAndUpdate({_id:id},{$set:{age:99}});
        res.send(response);
        console.log(response);
        
    } catch (error) {
     console.log(error);

    }
})

app.post('/delete/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const response = await student.deleteOne({_id:id});
        res.send("deleted");
        console.log(response);
    } catch (error) {
        console.log(error);
    }
})
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);

})


