const express = require('express');
const router = express.Router();
const UserResult = require('../db/models/UserResultModel');

router.get('/', (req, res) => {
    res.send("User Results API");
});

router.post('/', (req, res) => {
    console.log(req.body);
})

module.exports = router;
