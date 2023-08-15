const express = require('express');
const servicesUsers = require('../services/servicesUsers');
const router = express.Router();

router.get('/', async (req, res) => {
 const getUsert = await servicesUsers.getAllUsers(req, res);
 return getUsert;
})

module.exports = router;
