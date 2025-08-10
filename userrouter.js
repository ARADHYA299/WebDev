const express = require('express');
const path = require('path');

const user_c = require('../controllers/usercontroller');

module.exports = function(registeredHomes){
  const userrouter = express.Router();

  userrouter.get("/" , user_c.usercontrol(registeredHomes));

  return userrouter;
};