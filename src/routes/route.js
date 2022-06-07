const express = require('express');
const router = express.Router();
const controller= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createBook", controller.createBook  )
router.post("/createAuthor", controller.createAuthor  )
router.get("/getAllBooks", controller.getAllBooks  )
router.post("/getAuthorName", controller.getAuthorName )
router.post("/authorNames", controller.authorNames )


module.exports = router;
