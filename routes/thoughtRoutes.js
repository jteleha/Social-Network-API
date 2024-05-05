const express = require('express');
const router = express.Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
} = require('../controllers/thoughtController');

router.get('/', getThoughts);
router.get('/:thoughtId', getSingleThought);
router.post('/', createThought);
router.put('/:thoughtId', updateThought);
router.delete('/:thoughtId', deleteThought);

module.exports = router;