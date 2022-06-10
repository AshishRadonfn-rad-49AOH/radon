const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middelware/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createBook", BookController.createBook  )

router.get("/basicRoute", commonMW.mid1,UserController.basicCode)
router.get("/basicRoute2", commonMW.mid2, UserController.basicCode2)
router.get("/basicRoute3",  commonMW.mid3,UserController.basicCode3)
router.get("/basicRoute4",  commonMW.mid4,UserController.basicCode4)
// router.get("/basicRoute4",)


module.exports = router;
