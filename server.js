const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/form', (req, res) => {
  
});

app.listen(3000, () => {console.log('Servidor ON')});
