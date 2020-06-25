const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    console.log('inside articles / route');
    res.send('Articles Route');
});

module.exports = router;