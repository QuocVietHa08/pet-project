var fs=require('fs');

var content=fs.readFileSync('./data.json',{encoding:'utf8'});
console.log(content);