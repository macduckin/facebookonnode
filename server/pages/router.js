const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("index")
});
router.get('/blog-details', (req, res) => {
    res.render("blog-details")
});
router.get('/edit', (req, res) => {
    res.render("editblog")
});
router.get('/login', (req, res) => {
    res.render("login")
});
router.get('/new', (req, res) => {
    res.render("newblog")
});
router.get('/profile', (req, res) => {
    res.render("profile")
});
router.get('/register', (req, res) => {
    res.render("register")
});

module.exports = router;