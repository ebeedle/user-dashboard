var express = require('express');
var router = express.Router();
const ctrls = require('../controllers');

router.get('/signup', ctrls.getPage);
router.post('/signup', ctrls.signUp);
router.get('/login', ctrls.getPage);
router.get('/', ctrls.getPage);
router.get('/home', ctrls.getPage);
router.get('/userInfo', ctrls.getUserInfo)
router.get('/edit', ctrls.getPage);
router.post('/edit', ctrls.editInfo);
router.get('/allUsers', ctrls.getAllUsers);
router.get('/tempRedirect', ctrls.getPage);
// router.get('/userInfo', ctrls.getUserInfo2)

module.exports = router;