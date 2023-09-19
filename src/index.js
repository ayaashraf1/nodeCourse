const http = require('http');


const server = http.createServer((req,res)=>{
    if(req.method == 'GET' && req.url == '/'){
        console.log('hellooo from server');
        res.end();
    }
});

server.listen('3000',()=>{
    console.log('localhost running on 3000');
})