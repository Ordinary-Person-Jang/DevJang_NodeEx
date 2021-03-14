const express = require('express');
const app = express();
const port = 8080;
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://DevJang:jang6955*@cluster0.phkrq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  useNewUrlParse: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify:false
}).then(()=> console.log('mongoDB Connected...')).catch(err => console.log(err))

app.listen(port, function(){
  console.log('listening on 8080');
});

app.get('/pet', function(req, res){
  res.send('반갑습니다. 펫용품 사이트입니다.');
}); 

app.get('/', function(req, res){
  res.sendFile(__dirname+'/index.html');
});