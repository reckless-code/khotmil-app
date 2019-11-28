const express = require('express');
const router = express.Router();

const Khotmil = require('../models').Khotmil;

router.get('/', (req, res) => {
  Khotmil.findAll()
    .then(khotmil => {
      console.log(khotmil);
      res.sendStatus(200);
    })
    .catch(error => console.log(error));
});

module.exports = router;