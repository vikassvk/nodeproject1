const student = require('../studentmodel');
const readhandlar = 
async(req,res)=>{
    try{
        // const id = req.params.id;
    
        const response =  await student.find();
        res.send(response);
    
    }catch(err){
        console.log(err);
    }
    
        // res.send("person found");
    
    
   
};

module.exports = readhandlar;