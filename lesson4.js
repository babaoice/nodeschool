var fs = require('fs')
var cont 


fs.readFile(process.argv[2], "utf-8",function (err,data){
	if(err){
		throw err
	}
	
	cont = data
	
	str = cont.split("\n")
	console.log(str.length-1)
}	
)

