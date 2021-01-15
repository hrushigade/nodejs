var fs=require('fs');
var zlib= require('zlib');
fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(fs.createWriterStream('input.txt.gz'));
console.log("file compressed");