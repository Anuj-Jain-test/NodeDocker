const express = require("express");

const PORT = process.env.PORT || 8000;
const app = express();

app.get("/", (req,res) =>{
    res.json({message:"App is running on docker container"});
});

app.listen(PORT,() => {
    console.log(`App is running on ${PORT}`);
})