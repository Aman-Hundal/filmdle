const express = require('express');
const router = express.Router();
const UserResult = require('../db/models/UserResult');

//GET ROUTE
router.get('/', async (req, res) => {
    const resData = {
        totalUserWins: 0,
        totalGames: 0,
        currentStreak: 0,
        bestStreak: 0,
        totalWins: 0,
        firstGuess: 0,
        secondGuess: 0,
        thirdGuess: 0
    };
    const user = req.query["user"];
    const currentExpiry = new Date(req.query["currentExpiry"])

    try {
        // Find and return all wins for currentExpiry to get all wins for current weekly movie
        //BUG MUST MAKE TIMES FOR ALL SUNDAY TO BE 12pm NOON. RIGHT NOW THEY JUST 24hours till next sunday
        const totalWins = await UserResult.find({ gameEndDate: currentExpiry, win: true }).count();
        resData.totalWins = totalWins;
        // Find and return all wins for user
        const userTotalWins = await UserResult.find({ user: user, win: true }).count();
        resData.totalUserWins = userTotalWins;
        // Find all user games played
        const userTotalGames = await UserResult.find({ user: user }).count();
        resData.totalGames = userTotalGames;
    } catch (error) {
        console.error(error);
    }
    res.send(resData);
});

//POST ROUTE
router.post('/', async (req, res) => {
    const data = req.body;
    try {
        //Create new UserResult
        const newUserResult = new UserResult({
            user: data.user,
            win: data.win,
            guesses: data.guesses,
            guessCount: data.guessCount,
            movieID: data.movieID,
            movieName: data.movieName,
            gameEndDate: data.endDate
        })
        //Save UserResult
        const result = await newUserResult.save();
        res.status(201).json({ 'success': 'User result created and stored!' });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ 'message': `${error.message}` });
    }
})

module.exports = router;