//熟悉art-template模版插件,包含模板解析、生成HTML和返回客户访问请求
var http = require('http');
var fs = require('fs');
var template = require('art-template');
var server = http.createServer();
server.on('request',function(req,res){
    fs.readFile('test/tpl.html',function(err,data){
        if(err){
            console.log('读取模板失败！');
        }else{
            var ret = template.render(data.toString(), {
                name: 'Jack',
                age: 18,
                province: '北京市',
                hobbies: [
                  '写代码',
                  '唱歌',
                  '打游戏'
                ],
                title: '个人信息'
              });
              res.end(ret);
              fs.writeFile('test/creat.html',ret,function(err,data){//尝试将解析后的模版生成静态HTML
                if(err){
                    console.log('生成HTNL错误！');
                }else{
                    console.log('生成HTNL成功！');
                }
              });
        }
    });
});
server.listen(1234,function(){
    console.log('Server is running...');
})
