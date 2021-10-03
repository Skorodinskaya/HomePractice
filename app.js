const fs = require ('fs');
const path = require('path');

const mkdirBoys = path.join(__dirname, 'users', 'boys');
const mkdirGirls = path.join(__dirname, 'users', 'girls');

fs.mkdir(mkdirBoys, {recursive: true}, err => {
    console.log(err);
});

fs.mkdir(mkdirGirls, {recursive: true}, err => {
    console.log(err);
});

const sorter = (currentFolder, gender, futureFolder) => {
    fs.readdir(currentFolder, (err, data) => {
        if(err){
            console.log(err);
            return;
        }

        data.forEach(value => {
            fs.readFile(path.join(currentFolder, value), (err, data)=> {
                if(err) {
                    console.log(err);
                    return;
                }

                const item = JSON.parse(data);
                if(item.gender === gender){
                    fs.rename(path.join(currentFolder, value), path.join(futureFolder, value), (err) => {
                        if(err){
                            console.log(err);
                        }
                    })
                }
            })
        })
    })
}

sorter(mkdirBoys, 'female', mkdirGirls);
sorter(mkdirGirls, 'male', mkdirBoys);