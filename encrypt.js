const crypto = require('crypto');
const fs = require('fs');

function convert(password, input, output, encrypt)
{
    const algorithm = 'aes192';
    const file_encoding = 'utf8';
    const output_encoding = 'hex';
    
    
    var crypt = 
        encrypt 
        ?
        crypto.createCipher(algorithm, password)
        :
        crypto.createDecipher(algorithm, password);
    
    const inputStream = fs.createReadStream(input);
    const outputStream = fs.createWriteStream(output);
    
    inputStream.pipe(crypt).pipe(outputStream);
}

module.exports.encrypt = function(password, input, output) {
    convert(password, input, output, true);
}

module.exports.decrypt = function(password, input, output) {
    convert(password, input, output, false);
}