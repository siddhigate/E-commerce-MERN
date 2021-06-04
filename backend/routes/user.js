const express = require("express");
const router = express.Router();
const { check } = require('express-validator');

const { getUserById, getUser, updateUser, userPurchaseList } = require("../controllers/user");
const {isSignedIn, isAuthenticated, isAdmin} = require("../controllers/auth");

router.param("userId", getUserById);

router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);

router.put("/user/:userId", [
    // check("name", "name should be atleast 3 characters").isLength({ min: 3}),
    check("email").isEmail().withMessage("email is not valid"),
    // check("password", "password should be atleast 5 chars").isLength({ min : 5 })
], isSignedIn, isAuthenticated, updateUser);

router.get("/order/user/:userId", isSignedIn, isAuthenticated, userPurchaseList);

module.exports = router;