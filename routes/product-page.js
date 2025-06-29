
const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('product-page');
});

module.exports = router;
