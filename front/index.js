var koa = require("koa");
var app = new koa();

var server=require("koa-static")
app.use(server("public"));



app.listen(8005, function (err) {
    console.log(err);
    console.log("listen 8005");
});