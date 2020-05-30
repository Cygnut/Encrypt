var program = require('commander');
var e = require('./encrypt');

program
  .version('0.0.1')
 
program
  .command('encrypt')
  .alias('e')
  .description('encrypt the file with the given password')
  .option("-p, --password <password>", "the password to use")
  .option("-i, --input <input>", "the path to the input file")
  .option("-o, --output [output]", "the path to the output file. If not specified, is input plus '.encrypted'")
  .action(function(options) {
    options = options || {}
    
    if (!options.password)
        throw new Error("password required.");
    
    if (!options.input)
        throw new Error("input filepath required.");
    
    var output = options.output || options.input + '.encrypted';
    
    e.encrypt(options.password, options.input, output);
    
    console.log('password %s, input %s, output %s', options.password, options.input, output);
  });
 
program
  .command('decrypt')
  .alias('d')
  .description('decrypt the file with the given password')
  .option("-p, --password <password>", "the password to use")
  .option("-i, --input <input>", "the path to the input file")
  .option("-o, --output [output]", "the path to the output file. If not specified, is input plus '.decrypted'")
  .action(function(options) {
    options = options || {}
    
    if (!options.password)
        throw new Error("password required.");
    
    if (!options.input)
        throw new Error("input filepath required.");
    
    var output = options.output || options.input + '.decrypted';
    
    e.decrypt(options.password, options.input, output);
    
    console.log('password %s, input %s, output %s', options.password, options.input, output);    
  });

program.parse(process.argv);