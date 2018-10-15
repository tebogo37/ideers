var express = require('express'),
 cool = require('cool-ascii-faces'),
 path = require('path'),
 bodyParser = require('body-parser'),
 nodeMailer = require('nodemailer'),
 PORT = process.env.PORT || 5000;

 var routing = require('./routes/routing')

var app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routing);


app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
