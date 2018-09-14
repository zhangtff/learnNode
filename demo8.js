//判断访问url是目录还是文件，是文件的话返回文件，目录的话返回文件列表
var http = require('http');
var fs = require('fs');
var art = require('art-template');
var path = require('path');
var wwwDir = 'D:/nodejs/myapp/test/';
var server = http.createServer();
server.on('request',function(req,res){
    var url = req.url;
    var urlpath = path.join(wwwDir,url);//使用path库的join方法拼接出资源请求的绝对地址
    fs.stat(urlpath,function(err,stats){//fs库的stat函数用来判读指定路径的状态,即判断路径是否存在是文件夹，是否是文件
        if(err){
            return res.end('404 Not Found.');//return后不再执行后面的代码
        }
        if(stats.isDirectory()){
            var templateStr = fs.readFileSync('./test/static-template.html').toString();
            var files = fs.readdirSync(urlpath);
            var htmlStr = art.render(templateStr,{files:files});
            return res.end(htmlStr);
        }
        if(stats.isFile()){
            fs.readFile(urlpath,function(err,data){
                if(err){
                    return res.end('404 Not Found.');
                }else{
                    return res.end(data);
                }
            });
        }
    });
});
server.listen(1234,function(){
    console.log('Server is running...');
});