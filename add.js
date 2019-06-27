// add.js// adds two integers received as command line arguments
function add(a, b) {    return parseInt(a)+parseInt(b);}
// process.argv[0] and process.argv[1], are reserved by node
// process.argv[2] and process.argv[3] let you access the command line arguments
if(!process.argv[2] || !process.argv[3]) {    console.log('Insufficient number of arguments! Give two numbers please!');}

else {    console.log('The sum of', process.argv[2], 'and', process.argv[3], 'is', add(process.argv[2], process.argv[3]));}
