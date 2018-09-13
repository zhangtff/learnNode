//创建WEB服务器
var http = require('http');
var server = http.createServer();
server.on('request',function(req,res){//回调函数的两个参数：请求和返回资源
    console.log('请求我的路径为：'+req.url);
    console.log('请求我的客户端地址是',req.socket.remoteAddress,req.socket.remotePort)
    //res.write('welcome to here!');//汉字会乱码
    //res.end();//这个一定要有
    var url = req.url;
    if(url == '/'){
        res.end('index page');
    }else if(url == '/login'){
        res.end('login page');
    }else if(url == '/product'){
        var result = [
            {
                name:'苹果',
                price:'3.5'
            },
            {
                name:'香蕉',
                price:'2.5'
            },
            {
                name:'橘子',
                price:'5.0'
            }
        ];
        res.end(JSON.stringify(result));//响应内容只能是二进制数据或者字符串
    }else{
        res.end('404 not found');
    }
});
server.listen(1234,function(){
    console.log('Web服务已启动！');
})