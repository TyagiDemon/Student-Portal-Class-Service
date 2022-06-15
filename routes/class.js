const express = require("express");
const createClass = require("../controllers/createClass");
const createComment = require("../controllers/createComment");
const createReply = require("../controllers/createReply");
const router = express.Router();

router.post("/createClass", createClass);
router.post("/createComment", createComment);
router.post("/createReply", createReply);

module.exports = router;
