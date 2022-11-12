const express = require('express');
const router = express.Router();
const UserResult = require('../db/models/UserResult');

//GET ROUTE
router.get('/', async (req, res) => {
    const allUserResults = await UserResult.find();
    res.send(allUserResults);
});

//POST ROUTE
router.post('/', async (req, res) => {
    const data = req.body;
    try {
        const newUserResult = new UserResult({
            user: data.user,
            win: data.win,
            guesses: data.guesses,
            guessCount: data.guessCount,
            movieID: data.movieID,
            movieName: data.movieName,
            gameEndDate: data.endDate
        })
        const result = await newUserResult.save();
        res.status(201).json({ 'success': 'User result created and stored!' });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ 'message': `${error.message}` });
    }
})

module.exports = router;