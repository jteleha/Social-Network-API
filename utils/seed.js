const mongoose = require('mongoose');
const User = require('../models/User');
const Thought = require('../models/Thought');
const Reaction = require('../models/Reaction');

const connectionString = 'mongodb://127.0.0.1:27017/socialNetworkDB';

const seedDatabase = async () => {
    await mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

    await User.deleteMany({});
    await Thought.deleteMany({});
    await Reaction.deleteMany({});

    const createdUsers = await User.insertMany([
        { username: 'user1', email: 'user1@example.com' },
        { username: 'user2', email: 'user2@example.com' }
    ]);

    const createdThoughts = await Thought.insertMany([
        { thoughtText: "Here's a cool thought from user1", username: 'user1' },
        { thoughtText: "Here's another thought from user2", username: 'user2' }
    ]);

    const reactions = [
        { reactionBody: "Great thought!", username: "user2" },
        { reactionBody: "Interesting idea!", username: "user1" }
    ];

    await Reaction.create({ ...reactions[0], thoughtId: createdThoughts[0]._id });
    await Reaction.create({ ...reactions[1], thoughtId: createdThoughts[0]._id });

    await Thought.findByIdAndUpdate(createdThoughts[0]._id, {
        $push: { reactions: reactions.map(r => r._id) }
    });

    console.log('Database seeded!');
    process.exit(0);
};

seedDatabase();