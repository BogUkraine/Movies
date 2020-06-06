/* eslint consistent-return: 0 */
const fs = require('fs');

const fileDelimiter = async (req, res, next) => {
  try {
    const { file } = req;
    fs.readFile(file.path, 'utf8', (err, fileData) => {
      if (!fileData || fileData.trim() === '') {
        return res.status(400).send({ message: 'Empty file' });
      }

      const data = fileData.trim().split('\n\n');
      const arrOfObjects = data
        .map((item) => item.split('\n'))
        .map((item) => Object.fromEntries(
          item.map((inner) => inner.split(': ')),
        ))
        .map((item) => ({
          ...item,
          stars: item.stars
            ? item.stars.split(', ')
            : next(),
        }));
      req.movies = arrOfObjects;
      next();
    });
  } catch (error) {
    return res.status(500).send({ message: 'Can not post movies', error });
  }
};

module.exports = fileDelimiter;
