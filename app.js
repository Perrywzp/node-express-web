/**
 * [desc]
 * @author wangzhipei
 * @date 2016/8/3/0003.
 */

var express = require('express');
var app = express();
app.set('port', process.env.PORT || 3000);

// lib
var fortune = require('./lib/fortune.js');


// 这里使用了handlebars ，并将解析的扩展名改为了.hbs
var hbs = require('express-handlebars');
app.engine('.hbs', hbs({extname:'.hbs',defaultLayout: 'main'}));
app.set('view engine', '.hbs');



if ('development' === app.get("env")) {
  //能够在browser端打出错误
  app.set('showStackError', true);
  app.locals.pretty = true;
}

app.use(express.static(__dirname+'/public'));

app.listen(app.get('port'),function(){
  console.log('Express started on http://localhost:'+
    app.get('port')+ '; press Ctrl-C to terminate.'
  );
});


app.get('/', function (req, res) {
  res.render('home');
});

app.get('/about', function (req, res) {
  res.render('about', {fortune: fortune.getFortune()});
});


// 404 catch-all处理器 中间件

app.use(function (req, res, next) {
  res.status(404);
  res.render('404');
});

// 500错误处理器 （中间件）

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500);
  res.render('500');
});
