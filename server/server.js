const path = require('path');
const express = require('express');


const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(publicPath));
app.listen(port,function(){
  console.log(`server starts with port ${port}`);
});

//console.log(__dirname+ '/../public');
//console.log(publicPath);
