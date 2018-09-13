//web服务器返回不同类型数据
var http = require('http');
var fs = require('fs');
var server = http.createServer();
server.on('request',function(req,res){
    var url = req.url;
    if(url == '/plain'){//plain表示内容为文本，同时设置了编码
        res.setHeader('Content-type','text-plain;charset=utr-8');
        res.end('返回纯文本！');
    }else if(url == '/html'){//html表示内容为网页，同时设置了编码
        res.setHeader('Content-type','text-html;charset=utr-8');
        res.end('<p>返回HTML！<a href="https://www.baidu.com" target="_blank">跳转百度</a></p>')
    }else if(url == '/img'){//Content-Type参照http://tool.oschina.net/commons
        var content = fs.readFileSync('../test/c.png');//必须二进制读取
        res.setHeader('Content-type','image/png;charset=utr-8');
        res.end(content);
    }
});
server.listen(1234,function(){
    console.log('服务已启动...');
});