const router = require('express').Router();
const Cats = require('../models/cat');


router.get('/', (req, res) => {
    res.render('home');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/cats', async (req, res) => {
    try {
      const catData = await Cats.findAll({
        include: [
          {
            model: cat,
            attributes: ['cat_name', 'age', 'gender', 'description', 'filename'],
          },
        ],
      });
  
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