# encrypt
Simple little file encryption CLI tool.

# Commands

## e/encrypt:
Encrypt the file with the given password.

### Options:

* -p/--password - the password to use.
* -i/--input - the path to the input file.
* -o/--output - the path to the output file. If not specified, is input plus '.encrypted'.

## d/decrypt:
Decrypt the file with the given password.

### Options:

* -p/--password - the password to use.
* -i/--input - the path to the input file.
* -o/--output - the path to the output file. If not specified, is input plus '.decrypted'.

