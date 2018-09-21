const express = require('express');
const router = express.Router();
const os = require('os');
const ifaces = os.networkInterfaces();
const config = require("../config.json")
const calculator = require("../helper/calculator")

function format(seconds) {
  function pad(s) {
    return (s < 10 ? '0' : '') + s;
  }
  const hours = Math.floor(seconds / (60 * 60));
  const minutes = Math.floor(seconds % (60 * 60) / 60);
  const s = Math.floor(seconds % 60);

  return pad(hours) + ':' + pad(minutes) + ':' + pad(s);
}


/* GET home page. */
router.get('/', function (req, res, next) {
  res.status(200).json({
    env: config.env,
    uptime: format(process.uptime()),
    networkInterfaces: ifaces
  })
});


router.get("/plus/:a/:b", function (req, res, next) {
  const {
    a,
    b
  } = req.params
  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({
      answer:"A or B not a number",
      a,
      b,
      operation: "plus"
    })
  }
  const answer = calculator.plus(a, b)
  res.status(200).json({
    answer,
    a,
    b,
    operation: "plus"
  })
})

module.exports = router;
