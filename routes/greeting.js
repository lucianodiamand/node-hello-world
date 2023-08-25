var express = require('express');
var router = express.Router();

/* GET greeting */
router.get('/', function(req, res, next) {
  const value = process.env.MYSECRET ?? 'nada';
  res.send(
    { "greeting": value }
  );
});

module.exports = router;
