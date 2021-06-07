var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var morgan = require('morgan');

var cors = require('cors');
var app = express();

                                  
app.use(cors());
app.use(bodyParser.urlencoded({'extended':'true'}));           
app.use(bodyParser.json());                                   
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(methodOverride());
app.use(morgan('dev'));                                         

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
    console.log("@@@@@@@@@@@@@@@@@@@@@")
    res.send('Hello World test!')
    
  })
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})