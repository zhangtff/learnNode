/*
*熟悉url模块和path模块
*/
// var url = require('url');
// var obj = url.parse('/test/index?name=张亮&age=88',true);
// console.log(obj);
// console.log(obj.query.name);
// console.log(obj.pathname);
var path = require('path');
var baseDir = 'D:/nodejs/myapp';
var url = '/test/ab2.jpg';
console.log(path.join(baseDir,url));//join方法用于拼接链接