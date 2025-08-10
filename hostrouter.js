const express = require("express");
const path = require("path");

const h_cont = require("../controllers/homecontroller");
const post_home = require("../controllers/postaddhome");

module.exports = function (registeredHomes) {
  const hostrouter = express.Router();
 
  hostrouter.get("/add-home" , h_cont.get_add_home);
  hostrouter.post("/add-home",post_home.post_add_home(registeredHomes));

  return hostrouter;
};
