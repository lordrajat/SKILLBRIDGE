
const express = require('express');
const router  = express.Router();
const viewAll = require('../db/queries/view-all');

router.get('/', (req, res) => {

  viewAll.getAllListings()
    .then(listings => {
      console.log(listings);
      res.render("view-all-products.ejs", {listings});
    })
    .catch(err => {
      console.log(err.message);
    });
});

router.get('/highest', (req, res) => {

  viewAll.GetHighestToLowestListings()
    .then(listings => {
      console.log(listings);
      res.render("view-all-products.ejs", {listings});
    })
    .catch(err => {
      console.log(err.message);
    });
});

router.get('/lowest', (req, res) => {

  viewAll.GetLowestToHighestListings()
    .then(listings => {
      console.log(listings);
      res.render("view-all-products.ejs", {listings});
    })
    .catch(err => {
      console.log(err.message);
    });
});

module.exports = router;

