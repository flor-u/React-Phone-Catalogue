const express= require('express');
const app = express();
const phones= require('./phones.json')

app.get("/phones", (req, res, next) => {
    res.json(phones);
   });

app.listen(3000, () => {
    console.log("Server running on port 3000");
   });