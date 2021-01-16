var http=require('http');
http.createServer(function(request,response){
    var pathname=url.parse(request.url).pathname;
    console.log("request for"+pathname+"received");
    fs.readFile(pathname.substr(1),function(err,data){
        if(err){
            console.log(err);
            response.writehead(404,{'Content-Type':'text/html'});
        }else{
            response.writeHead(200,{'content-Type':'text/html'});
            response.write(data.toString());
        }
        response.end();        
    });
    listen(8081);
console.log('server running at http://127.0.0.1:8081/');
});