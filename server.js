var express = require('express');
var app = express()
app.get('/',(req, res) =>{
    res.send("Whazza World");
})
app.listen(3000);