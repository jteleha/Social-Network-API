const Reaction = require('../models/Reaction');

async function createReaction(req, res) {
    try {
        const newReaction = await Reaction.create(req.body);
        res.status(201).json(newReaction);
    } catch (error) {
        res.status(500).json(error);
    }
}

async function deleteReaction(req, res) {
    try {
        const reaction = await Reaction.findByIdAndDelete(req.params.reactionId);
        if (!reaction) {
            return res.status(404).json({ message: 'Reaction not found' });
        }
        res.status(200).json({ message: 'Reaction deleted successfully' });
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    createReaction,
    deleteReaction
};