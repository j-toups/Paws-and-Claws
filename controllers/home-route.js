const router = require('express').Router();
const { Cat, Fancy, Dog } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', (req, res) => {
    res.render('home');
});

router.get('/login', (req, res) => {
    res.render('login');
});


router.get('/cats', withAuth, async (req, res) => {
  console.log('hello!')
    try {
      const catData = await Cat.findAll({
 
      });

posts
// router.get('/cats', (req, res) => {
//     res.render('cats', {

//     });
// });

//GET ALL CATS
main
router.get('/cats', async (req, res) => {
    try {
      const catData = await Cat.findAll();
      

  
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

posts
  router.post ('/cats', (req, res) => {
        Cat.create({
            cat_name: req.body.cat_name,
            age: req.body.age,
            gender: req.body.gender,
            description: req.body.description,
            filename: req.body.filename
        }).then((newCat) => {
            res.json(newCat);
          }).catch((err) => res.json(err));
  });

  router.delete('/cats/:id', (req, res) => {
    Cat.destroy({
      where: {
        id: req.params.id
      }
    }).then((deletedCat) => {
      res.json(deletedCat);
    }).catch((err) => res.json(err));
  });




  router.get('/exotics', withAuth, async (req, res) => {
   
=======
  //GET ALL EXOTICS
main
  router.get('/exotics', async (req, res) => {

    try {
      const fancyData = await Fancy.findAll();
  
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


  router.get('/dogs', withAuth, async (req, res) => {
  
    try {
      const dogData = await Dog.findAll({
      
      });
  
      const dogs = dogData.map((dog) =>
         dog.get({ plain: true })
      );
  
      res.render('dogs', {
        dogs, loggedIn: req.session.loggedIn

      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

router.get('/logout', async (req, res)=> {
  req.session.destroy();
  res.json('logged out!');
})
module.exports = router;





















posts
module.exports = router;

router.post ('/exotics', (req, res) => {
    Fancy.create({
        fancy_name: req.body.fancy_name,
        age: req.body.age,
        gender: req.body.gender,
        description: req.body.description,
        filename: req.body.filename
    }).then((newFan) => {
        res.json(newFan);
      }).catch((err) => res.json(err));
});

router.delete('/exotics/:id', (req, res) => {
Fancy.destroy({
  where: {
    id: req.params.id
  }
}).then((deletedFan) => {
  res.json(deletedFan);
}).catch((err) => res.json(err));
});


//GET ALL DOGS
main
router.get('/dogs', async (req, res) => {
  try {
    const dogData = await Dog.findAll();
    console.log(dogData)



// router.get('/dogs', async (req, res) => {
//   try {
//     const dogData = await Dog.findAll({
//       // include: [
//       //   {
//       //     model: Dog,
//       //     attributes: ['dog_name', 'age', 'gender', 'description', 'filename'],
//       //   },
//       // ],
//     });
//     console.log(dogData)

//     const dogs = dogData.map((dog) =>
//       dog.get({ plain: true })
//     );
// console.log(dogs)
//     res.render('dogs', {
//       dogs, loggedIn: req.session.loggedIn
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

posts
router.post ('/dogs', (req, res) => {
    Dog.create({
        dog_name: req.body.dog_name,
        age: req.body.age,
        gender: req.body.gender,
        description: req.body.description,
        filename: req.body.filename
    }).then((newDog) => {
        res.json(newDog);
      }).catch((err) => res.json(err));
});

router.delete('/dogs/:id', (req, res) => {
Dog.destroy({
  where: {
    id: req.params.id
  }
}).then((deletedDog) => {
  res.json(deletedDog);
}).catch((err) => res.json(err));

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
main
});


// module.exports = router;