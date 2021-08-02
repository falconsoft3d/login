const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/note-app',{
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(db => console.log('Db is Connected'))
    .catch(err => console.error(err));