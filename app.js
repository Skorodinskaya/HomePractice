const fs = require('fs');
const path = require('path');

const mkdirManOld = path.join(__dirname, 'users', 'manOlder20');
const mkdirManYoung = path.join(__dirname, 'users', 'manYounger20');
const mkdirWomanOld = path.join(__dirname, 'users', 'womanOlder20');
const mkdirWomanYoung = path.join(__dirname, 'users', 'womanYounger20');

fs.mkdir(mkdirManOld, {recursive: true}, (e) => {
    console.log(e);
});

fs.mkdir(mkdirManYoung, {recursive: true}, (e) => {
    console.log(e);
});

fs.mkdir(mkdirWomanOld, {recursive: true}, (e) => {
    console.log(e);
});

fs.mkdir(mkdirWomanYoung, {recursive: true}, (e) => {
    console.log(e);
});

const users = [
    {name: 'olya', gender: 'female', age: 14},
    {name: 'nastya', gender: 'female', age: 20},
    {name: 'iryna', gender: 'female', age: 29},
    {name: 'misha', gender: 'male', age: 16},
    {name: 'sasha', gender: 'male', age: 56},
    {name: 'nadia', gender: 'female', age: 4},
    {name: 'petro', gender: 'male', age: 26},
    {name: 'ivan', gender: 'male', age: 10}
];

users.forEach(item => {
    if (item.gender === 'female' && item.age < 20) {
        fs.writeFile(path.join(mkdirWomanYoung, `${item.name}.json`), JSON.stringify(item), (err) => {
            if (err) {
                console.log(err);
            }
        })
        return;
    }

    if (item.gender === 'female' && item.age >= 20) {
        fs.writeFile(path.join(mkdirWomanOld, `${item.name}.json`), JSON.stringify(item), (err) => {
            if (err) throw err;
        })
        return;
    }

    if(item.gender === 'male' && item.age > 20) {
        fs.writeFile(path.join(mkdirManOld, `${item.name}.json`), JSON.stringify(item), (err) => {
            if(err) throw err;
        })
        return;
    }

    console.log(item);
})