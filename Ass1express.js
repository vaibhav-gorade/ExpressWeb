var exp = require('express')

var app= exp()
app.listen(8000,function(){

    console.log("port started 8000")
})
app.get('/greet',function(req,res){

    res.write("hello from web page")
    res.end();
})