var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    res.send("Hello World");
});

router.get('/about', function(req, res, next) {
    res.send("Hello JSON");
});

module.exports = router;
