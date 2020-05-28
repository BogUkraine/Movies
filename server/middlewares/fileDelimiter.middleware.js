const fs = require('fs');

const fileDelimiter = async (req, res, next) => {
    try {
        const file = req.file;
        fs.readFile(file.path, 'utf8', (err, fileData) => {
            const data = fileData.trim().split('\n\n');
            const arrOfObjects = data
                .map(item => item.split('\n'))
                .map(item => Object.fromEntries(
                    item.map(inner => inner.split(': '))
                ))
                .map(item => {return {...item, stars: item.stars.split(', ')}});
            req.movies = arrOfObjects;
            next();
        });
    }
    catch(error){
        return res.status(500).send({message: 'Can not post movies', error});
    }
}

module.exports = fileDelimiter;