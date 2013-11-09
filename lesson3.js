var fs = require('fs')

//console.log(process.argv[2])

var buf = fs.readFileSync(process.argv[2])

var str = buf.toString()//轉成文字檔
str = str.split("\n")//把切割的回傳到str

console.log(str.length-1)
