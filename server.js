const express= require("express");
const app= express();
app.use(bodyParser.urlencoded({extended:true}))
app.post('/register', (req,res) => {
   const name= req.body.name;
   const dob = req.body.dob;
   res.send{
    "Name:" + name 
    "<br> Date of Birth" + dob
   }
});
app.listen(3000, () => {
    console.log("The Port Number is 3000")
});