const express = require ('express');
const mongoose = require('mongoose');
const routs = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://showdev:showdev@cluster0-bas97.mongodb.net/dbsd?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.use(express.json());
app.use(routs);


app.listen(3333);