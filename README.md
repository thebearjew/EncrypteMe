## Encrypt Me 

This project is a simple application that allows user to encrypt messages with a key. This same key is used to decrypt the encrypted message.

### Algorithm
The main algorithm used to encrypt the text is a generator object created using the input key. Each character of the key is converted to an ASCII number, which is then pushed into a list. Once an infinite generator object is created, each character of the message is encrypted based on what position the generator object yields.   
