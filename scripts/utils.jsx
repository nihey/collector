var Firebase = require('firebase');

var Utils = {
  firebase: new Firebase(Config.FIREBASE_URL),
};

module.exports = Utils;
