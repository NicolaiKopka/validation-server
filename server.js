const express = require("express");
const validate = require("./validate")
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json())

app.post("/", function(req, res){
    let response = validate.validateEntries(req.body)
    if(response.error) {
        res.status(400)
        res.json(response)
    } else {
        res.status(200)
        res.json(req.body)
    }
    
})

app.listen(PORT, function(req, res){
    console.log(`server is running on http://localhost:${PORT}`)
})