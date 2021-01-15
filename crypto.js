const crypto = require('crypto');
const secret = 'abcdefg';
const hash=crypto.createHmac('sha256',secret).update('wecome to india').digest('hex');
console.log(hash);