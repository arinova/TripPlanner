const express=require('express');
const bodyParser=require('body-parser');
const morgan=require('morgan');
const nunjucks=require('nunjucks');
const path=require('path');
var app=express();

const router=require('./routes');

app.set("view engine", "html");
app.engine("html", nunjucks.render);
var env=nunjucks.configure("views", {noCache: true});


app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, "./public")));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(router);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.use(function(err, req, res, next){
  res.status(err.status || 500);
   console.error(err);
   res.render("error");
});

app.listen(3000,function(){
  console.log("Server listening at port 3000");
});
