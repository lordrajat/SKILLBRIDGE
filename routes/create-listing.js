
const express = require('express');
const router  = express.Router();
const listing = require('../db/queries/make-listing')

router.get('/', (req, res) => {
  res.render('create-listing');
});




router.post('/new', (req, res) => {
  const data = req.body;
  listing.createListing(data)
    .then(() => {
      // res.redirect('/')
      res.redirect('/');
    })
    .catch(err => {
      console.log("insert error",err.message);
    });
});



module.exports = router;
