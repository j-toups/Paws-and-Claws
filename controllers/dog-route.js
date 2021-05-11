const router = require('express').Router();
const { Dog } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const dbDogData = await Dog.findAll({
      include: [
        {
          model: Dog,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const dogs = dbDogData.map((dog) =>
      dog.get({ plain: true })
    );

    res.render('homepage', {
      dogs,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


const router = require('express').Router();
const { Dog } = require('../models');

//Get Dogs
router.get('/', async (req, res) => {
  try {
    const dbDogData = await Dog.findAll({
      include: [
        {
          model: Dog,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const dogs = dbG.map((dog) =>
      dog.get({ plain: true })
    );

    res.render('homepage', {
      dogs,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});