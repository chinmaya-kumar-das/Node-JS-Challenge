const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url=="/hello"){
        res.end("Hello world");
    }else if(req.url=='/welcome'){
        res.end("Hello world and welcome.");
    }else{
        res.writeHead(404);
        res.end("u are in the wrong URL");
    }
});

server.listen(8000,()=>{
    console.log("Server started");
});