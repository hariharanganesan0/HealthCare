const express = require("express");
const app = express();
app.use(express.unlencoded({extended:true}))
app.post('/profile', (req,res) => {
    const name = req.body.name;
    const age = req.body.age
    const PhoneNo = req.body.PhoneNo
    const dob = req.body.dob
    const Address = req.body.Address
    const BloodGroup = req.body.BloodGroup
     res.send(
        "Name:"+ name +
         " <br> Age:" + age +
         " <br> PhoneNo:" + PhoneNo +
         " <br> Date of Birth:" + dob +
         " <br> Address:" + Address +
         " <br> Blood Group:" + BloodGroup 
        )
});
app.listen(2000, () => {
    console.log("The Server number is 2000")
});



