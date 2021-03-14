const express = require('express');
const app = express();
const port = 8080;
const { User } = require('./models/User');
const bodyParser = require('body-parser');
const config = require('./config/key');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {
  useNewUrlParse: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify:false
}).then(()=> console.log('mongoDB Connected...')).catch(err => console.log(err))

app.listen(port, function(){
  console.log('listening on 8080');
});

app.post('/register', (req, res) => {
  const user = new User(req.body);
  user.save((err, userInfo)=>{
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      success: true
    })
  })
});
app.get('/pet', function(req, res){
  res.send('반갑습니다. 펫용품 사이트입니다.');
}); 

app.get('/', function(req, res){
  res.sendFile(__dirname+'/index.html');
});