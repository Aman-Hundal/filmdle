const express = require('express');
const router = express.Router();
const UserResult = require('../db/models/UserResult');
const { userWinStreak, userBestWinStreak } = require('./userResultHelpers');

//GET ROUTE
router.get('/', async (req, res) => {
    const resData = {
        totalUserWins: 0,
        totalUserGames: 0,
        currentStreak: 0,
        bestStreak: 0,
        totalWeeklyWins: 0,
        winGuess: [],
    };
    const user = req.query["user"];
    const currentExpiry = new Date(req.query["currentExpiry"]);
    try {
        //Find and return all wins for currentExpiry to get all wins for current weekly movie
        const totalWeeklyWins = await UserResult.find({ gameEndDate: currentExpiry, win: true }).count();
        resData.totalWeeklyWins = totalWeeklyWins;

        //Find and return all wins for user
        const userTotalWins = await UserResult.find({ user: user, win: true }).count();
        resData.totalUserWins = userTotalWins;

        //Find all user games played sorted from newest to oldest
        const userTotalGames = await UserResult.find({ user: user }).sort({ gameEndDate: -1 })
        resData.totalUserGames = userTotalGames.length;

        //Find first/second/third guess counts for wins for currently weekly game
        const firstguessWins = await UserResult.find({ gameEndDate: currentExpiry, win: true, guessCount: 1 }).count();
        const secondGuessWins = await UserResult.find({ gameEndDate: currentExpiry, win: true, guessCount: 2 }).count();
        const thirdGuessWins = await UserResult.find({ gameEndDate: currentExpiry, win: true, guessCount: 3 }).count();
        resData.winGuess.push(firstguessWins);
        resData.winGuess.push(secondGuessWins);
        resData.winGuess.push(thirdGuessWins);

        //Retrieve current win streak and best win streak for user
        resData.currentStreak = userWinStreak(userTotalGames);
        resData.bestStreak = userBestWinStreak(userTotalGames);
    } catch (error) {
        console.error(error.message);
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
        console.error(error.message);
        res.status(500).json({ 'message': `${error.message}` });
    }
})

module.exports = router;