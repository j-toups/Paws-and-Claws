const router = require('express').Router();
const { Cat, Fancy, Dog } = require('../models');


router.get('/', (req, res) => {
    res.render('home');
});

router.get('/login', (req, res) => {
    res.render('login');
});

// router.get('/cats', (req, res) => {
//     res.render('cats', {

//     });
// });

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
  console.log(cats)
      res.render('cats', {
        cats,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.get('/exotics', async (req, res) => {
    try {
      const fancyData = await Fancy.findAll({
      
      });
  
      const exotics = fancyData.map((exotic) =>
         exotic.get({ plain: true })
      );
  
      res.render('exotics', {
        exotics,

      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports = router;