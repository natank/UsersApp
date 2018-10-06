var express = require('express');
var methodOverride = require('method-override')
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var user = require("./routers/user");
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();
mongoose.connect("mongodb://natikam1:natikam1@ds123513.mlab.com:23513/users");
app.use(methodOverride('_method'));
app.use('/static', express.static('public'));
app.use(express.static('images'));
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: "Shh, its a secret!"}));


app.set('view engine', 'pug');
app.set('views', './views');

app.use("/user", user)

app.listen('3000', ()=>{console.log( //
	"Server is running on port 3000")})