const express = require("express");
const createClass = require("../controllers/createClass");
const createPost = require("../controllers/createPost");
const createComment = require("../controllers/createComment");
const createReply = require("../controllers/createReply");
const getPost = require("../controllers/getPost");
const getPosts = require("../controllers/getPosts");
const getComments = require("../controllers/getComments");
const getReplies = require("../controllers/getReplies");
const generateClassToken = require("../controllers/generateClassToken");
const joinClass = require("../controllers/joinClass");
const verifyLogin = require("../middlewares/verifyLogin");
const router = express.Router();

router.use(verifyLogin);

router.post("/createClass", createClass);
router.post("/createPost", createPost);
router.post("/createComment", createComment);
router.post("/createReply", createReply);
router.get("/getPosts/:class_id/:page/:perPage", getPosts);
router.get("/getPost/:post_id", getPost);
router.get("/getComments/:post_id/:page/:perPage", getComments);
router.get("/getReplies/:comment_id/:page/:perPage", getReplies);
router.patch("/generateClassToken/:class_id", generateClassToken);
router.patch("/joinClass/:token", joinClass);

module.exports = router;
