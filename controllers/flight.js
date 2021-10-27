const express = require('express');
const router = express.Router();
const Flight = require('../models/flight');

//* Flight Index Route
router.get('/', async (req, res) => {
  try {
    // send all flight information
    res.json(await Flight.find({}));
  } catch (error) {
    // send error message
    res.status(400).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    res.json(await Flight.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    res.json(
      await Flight.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post('/', async (req, res) => {
  try {
    res.json(await Flight.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
