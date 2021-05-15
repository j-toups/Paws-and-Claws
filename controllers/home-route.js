const router = require('express').Router();
const { Cat, Fancy, Dog } = require('../models');
const withAuth = require('../utils/auth');


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

//GET ALL CATS
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
        cats, loggedIn: req.session.loggedIn
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  //GET ALL EXOTICS
  router.get('/exotics', async (req, res) => {
    try {
      const fancyData = await Fancy.findAll({
      
      });
  
      const exotics = fancyData.map((exotic) =>
         exotic.get({ plain: true })
      );
  
      res.render('exotics', {
        exotics, loggedIn: req.session.loggedIn

      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

//GET ALL DOGS
router.get('/dogs', async (req, res) => {
  try {
    const dogData = await Dog.findAll({
      // include: [
      //   {
      //     model: Dog,
      //     attributes: ['dog_name', 'age', 'gender', 'description', 'filename'],
      //   },
      // ],
    });
    console.log(dogData)

    const dogs = dogData.map((dog) =>
      dog.get({ plain: true })
    );
console.log(dogs)
    res.render('dogs', {
      dogs, loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET ONE DOG BY ID
router.get('/dog/:id', async(req, res) => {
  try{
    const dogData = await Dog.findByPk(req.params.id, {
      include: [
        {
          model: Dog, 
          attributes: [
            'id', 
            'dog_name',
            'age', 
            'gender', 
            'description', 
            'filename',
          ],
        },
      ],
    });
    const dog = dogData.get({plain: true});
    res.render('dog', {dog});
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});


//GET ONE CAT BY ID
router.get('/cat/:id', async(req, res) => {
  try{
    const catData = await Cat.findByPk(req.params.id, {
      include: [
        {
          model: Cat, 
          attributes: [
            'id', 
            'cat_name',
            'age', 
            'gender', 
            'description', 
            'filename',
          ],
        },
      ],
    });
    const cat = catData.get({plain: true});
    res.render('cat', {cat});
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

//GET ONE EXOTIC ("FANCY") BY ID
router.get('/fancy/:id', async(req, res) => {
  try{
    const fancyData = await Fancy.findByPk(req.params.id, {
      include: [
        {
          model: Fancy, 
          attributes: [
            'id', 
            'fancy_name',
            'age', 
            'gender', 
            'description', 
            'filename',
          ],
        },
      ],
    });
    const Fancy = fancyData.get({plain: true});
    res.render('fancy', {fancy});
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});


module.exports = router;