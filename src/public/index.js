const express = require('express');

const api = express();
api.listen(3000, () => {
    console.log('API running');
});

api.get('/', (req, res) => {
    console.log(req);
    res.send('Hello World');
})
api.get('/stuff', (req, res) => {
    console.log(req);
    res.send('<div>This is a test of the html I sent</div>');
})
api.get('/32049ghjhalv8aa73asdvlvh8dsvs8', (req, res) => {
    console.log(req);
    res.send('<div>secret stuff</div>');
})