var fs=require('fs');
var zlib= require('zlib');
fs.createReadStream('input.txt.gz').pipe(zlib.createGzip()).pipe(fs.createWriterStream('input.txt'));
console.log("file Decompressed");