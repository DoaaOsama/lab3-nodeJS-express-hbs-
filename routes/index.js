const express = require("express");
const users = require("./data");
const router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { data: users });
});

//route to add page
router.get("/add", function(req, res, next) {
  res.render("add");
});

//update the array after adding user
router.post("/add", function(req, res, next) {
  users.push(req.body);
  res.redirect("/add");
});

//route to edit page
router.get("/edit/:userIndex", function(req, res, next) {
  res.render("edit", {
    user: users[req.params.userIndex],
    index: req.params.userIndex
  });
});

//update the array after edit
router.post("/edit/:userIndex", function(req, res, next) {
  users[req.params.userIndex] = req.body;
  res.redirect("/");
});

//delete user
router.get("/delete/:userIndex", function(req, res, next) {
  users.splice(req.params.userIndex, 1);
  res.redirect("/");
});

module.exports = router;
