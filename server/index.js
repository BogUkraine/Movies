const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || config.get('port');

app.use(cors())
app.use(express.json({extended: true}));
app.use('/api/movie', require('./routes/movie.routes'));

const start = async () => {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });

        app.listen(PORT, () => {
            console.log(`Server is ready on port ${PORT}`);
        });
    } catch (error) {
        console.log('Server has not started :(', error);
        process.exit(0);
    }
}

start();
