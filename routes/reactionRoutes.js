const express = require('express');
const router = express.Router();
const {
    createReaction,
    deleteReaction,
} = require('../controllers/reactionController');

router.post('/', createReaction);
router.delete('/:reactionId', deleteReaction);

module.exports = router;