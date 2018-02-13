// var mongoose = require('mongoose');

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/DTrackerApp');

// var schema = new mongoose.Schema({
//     link: {
//         type: String,
//         required: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     },
//     completedAt: {
//         type: Number,
//         default: null
//     }
// });

// var Logs = mongoose.model('Logs', schema);

// var log = new Logs({
//     link: 'abcd'
// });

// log.save().then((doc) => {
//     console.log('SAVED: ', doc);
// }, (e) => {
//     console.log('Unable to save.');
// });

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('public'));

var port = process.env.PORT || 4000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
});