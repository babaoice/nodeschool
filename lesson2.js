var argv = process.argv
var sum = 0

for(var i=2;i<argv.length;i++)
{	
	sum +=parseInt(argv[i],10)
}

console.log(sum)
