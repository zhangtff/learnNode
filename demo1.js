var foo = 'hello world!!!!!!!!';
//console.log(foo);
//console.log(window);//服务器都不存在BOM和DOM
//console.log(document);
var fs = require('fs');
fs.readFile('test/a.txt',function(err,data){//读文件方法两个参数：文件路径和回调函数。回调函数两个参数：错误提示和读取的数据
    //console.log(err);//无错误时值为null，有错误时是一个对象
    //console.log(data);//读出来的是二进制文件流
    if(!err){
        console.log(data.toString());//将二进制转化为字符串，调用方法一定要加()
    }else{
        console.log('文件读取失败，错误码：'+err.errno);
    }
});
fs.writeFile('test/b.txt',foo,function(err,data){
    if(!err){
        console.log('文件写入成功！')
    }else{
        console.log('文件写入失败，错误码：'+err.errno);
    }
});
/*
*输出结果为
*文件写入成功！
*hello world!
*说明readFile和writeFile都是异步执行的方法，如果想要控制执行顺序的话，可以使用对应的
*同步方法readFileSync和writeFileSync，同步方法不再具备回调方法，具体使用方法参考api
*/