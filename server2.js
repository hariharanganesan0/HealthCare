const express= require("express");
const app= express();
app.use(express.urlencoded({extended:True}))
app.post('/require', (req,res) => {
    const PatientID = req.body.PatientID
    const PatientName = req.body.PatientName
    const Disease = req.body.Disease
    const Medicine = req.body.Medicine
    const Doctor = req.body.Doctor
    const Date = req.body.Date
    res.send(
        "PatientID:" + PatientID +
        "Patient Name:" +PatientName +
        "Disease:" +Disease+
        "Medicine:" +Medicine+
        "Doctor:" +Doctor +
        "Date:" + Date 
    )
});
app.listen(500, () => {
     console.log("The server runs in 500 port")
});