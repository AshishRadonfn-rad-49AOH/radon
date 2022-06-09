const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController = require("../controllers/publisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor)

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createNewPublisher", publisherController.createNewPublisher)

router.get("/getPublisherData", publisherController.getPublisherData)

router.post("/createBooks", bookController.createBooks)

router.get("/getBooksData", bookController.getBooksData)

router.put("/newData", bookController.newData)
router.put("/saleIncrease", bookController.saleIncrease)


module.exports = router;
