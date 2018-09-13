//Web服务器深入
var http = require('http');
var fs = require('fs');
var server = http.createServer();
server.on('request',function(req,res){
    var url = req.url;
    if(url == '/index'){
        fs.readFile('test/index.html',function(err,data){//异步读取
            if(err){
                res.setHeader('Content-Type','text/plain;charset=utf-8');
                res.end('页面读取失败！');
            }else{
                // data 默认是二进制数据，可以通过 .toString 转为咱们能识别的字符串
                // res.end() 支持两种数据类型，一种是二进制，一种是字符串
                res.setHeader('Content-Type','text/html;charset=utf-8');
                res.end(data);
            }
        });
    }else if(url == '/img'){
        fs.readFile('test/ab2.jpg',function(err,data){
            if(err){
                res.setHeader('Content-Type','text/plain;charset=utf-8');
                res.end('图片读取失败！');
            }else{
                res.setHeader('Content-Type','image/jpeg;');//图片不要设置编码
                res.end(data);
            }
        });
    }
});
server.listen(1234,function(){
    console.log('Server is running');
})