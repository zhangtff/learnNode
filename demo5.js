//读取目录
var fs = require('fs');
fs.readdir('d:/nodejs/',function(err,data){
    if(err){
        console.log('读取目录失败！')
    }else{
        console.log(data);
    }
});