const fs = require('fs');
const path = require('path');

const mkdirBoys = path.join(__dirname, 'users', 'boys');
const mkdirGirls = path.join(__dirname, 'users', 'girls');

fs.mkdir(mkdirBoys, {recursive: true}, (err) => {
    console.log(err);
})
fs.mkdir(mkdirGirls, {recursive: true}, (err) => {
    console.log(err);
})
