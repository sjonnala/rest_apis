const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});

var hashedPassword = '$2a$10$mfyfsLbuWZyBj/ow2ATSQ.z8Fc7Flv1zKBjMJypmjd76my7DkiGru';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
})

// var data = {
//     id: 10
// }

// var token = jwt.sign(data, '123');
// console.log(token);

// var decode = jwt.verify(token, '123');
// console.log(decode);

/* var message = 'I am user 3';
var hash = SHA256(message).toString();

console.log(hash);

var data = {
    id: 4
}

var token = {
    data,
    hash: SHA256(JSON.stringify(data) + 'somedata').toString()
}

var resultHash = SHA256(JSON.stringify(data) + 'somedata').toString();

if(resultHash == token.hash){
    console.log('Data was not changed');
} else{
    console.log('Data was cahned');
} */
