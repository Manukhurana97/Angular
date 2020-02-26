const http = require('http');

http.createServer(function(req, res){
    //res.setHeader({'Content-type': 'text/plain'});
    res.setHeader('200', {'Content-type': 'text/html'})

    res.end("<h1>hello world</h1>")
}).listen(5000);


console.log("server is running at 5000");