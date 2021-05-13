const router = require('express').Router();
const { Cat } = require('../models');


router.get('/', (req, res) => {
    res.render('home');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/cats', async (req, res) => {
    try {
      const catData = await Cat.findAll({
        // include: [
        //   {
        //     model: Cat,
        //     attributes: ['cat_name', 'age', 'gender', 'description', 'filename'],
        //   },
        // ],
      });
      console.log(catData)
  
      const cats = catData.map((cat) =>
        cat.get({ plain: true })
      );
  
      res.render('cat-homepage', {
        cats,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports = router;