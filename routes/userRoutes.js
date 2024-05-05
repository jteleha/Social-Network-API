const express = require('express');
const router = express.Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
} = require('../controllers/userController');

router.get('/', getUsers);
router.get('/:userId', getSingleUser);
router.post('/', createUser);
router.put('/:userId', updateUser);
router.delete('/:userId', deleteUser);

module.exports = router;