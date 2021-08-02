const router = require('express').Router();

/*

router.get('/', (req, res) =>{
    res.render('index.hbs', { layout: 'dos' });
});

*/

router.get('/', (req, res) =>{
    res.render('index.hbs', { layout: 'main' });
});

router.get('/about', (req, res) =>{
    res.render('about');
});

module.exports = router;