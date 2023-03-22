//Function that takes in sorted userResult/Match data and gets the current win streak 
const userWinStreak = (userData) => {
    if (userData.length === 0) {
        return 0;
    }
    let streak = 0;

    for (let i = 0; i < userData.length; i++) {
        if (userData[i].win) {
            streak += 1;
        } else {
            break;
        }
    }
    return streak;
}
//Function that takes in sorted userResult/Match data and gets the users best win streak
const userBestWinStreak = (userData) => {
    if (userData.length === 0) {
        return 0;
    }
    let bestStreak = 0;
    let currentStreak = 0;

    for (let i = 0; i < userData.length; i++) {
        if (userData[i].win) {
            currentStreak += 1;
        } else {
            bestStreak = Math.max(currentStreak, bestStreak);
            currentStreak = 0;
        }
    }
    return Math.max(bestStreak, currentStreak);
}

module.exports = {
    userWinStreak,
    userBestWinStreak
};