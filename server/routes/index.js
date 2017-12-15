var express = require('express');
var router = express.Router();
const ctrls = require('../controllers');

router.get('/signup', ctrls.getPage);
router.post('/signup', ctrls.signUp);
router.get('/login', ctrls.getPage);
router.get('/home', ctrls.getPage);
router.post('/home', ctrls.getUserInfo)

module.exports = router;