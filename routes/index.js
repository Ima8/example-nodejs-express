var express = require('express');
var router = express.Router();
var os = require('os');
var ifaces = os.networkInterfaces();

function format(seconds) {
  function pad(s) {
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60 * 60));
  var minutes = Math.floor(seconds % (60 * 60) / 60);
  var seconds = Math.floor(seconds % 60);

  return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
}


/* GET home page. */
router.get('/', function (req, res, next) {
  res.status(200).json({
    uptime: format(process.uptime()),
    networkInterfaces: ifaces
  })
});

module.exports = router;
