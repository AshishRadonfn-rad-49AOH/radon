const express = require('express');
const externalModule = require('../logger/logger')
const util2 = require('../util/helper')
const validator3 = require('../validator/formatter')


const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('Welcome to my application. I am '+externalModule.name)
    console.log('and a part of FunctionUp '+externalModule.batch)
    console.log('cohort.')

    externalModule.welcome()
    util2.printDate()
    util2.printMonth()
    util2.getBatchInfo()
    console.log("string after Trimming :" + validator3.trimName)
    console.log( "string after lower case :" + validator3.toLower)
    console.log("string after upper case :" + validator3.toUpper)


    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason