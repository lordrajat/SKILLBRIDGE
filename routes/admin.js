const express = require('express');
const router  = express.Router();
const admin = require('../db/queries/admin');

router.get('/', (req, res) => {

  admin.getAdminCreatedListings()
    .then(listings => {
      console.log(listings);
      res.render("admin.ejs", {listings});
    })
    .catch(err => {
      console.log(err.message);
    });
});

router.get('/:id/delete', (req, res) => {

  admin.deletelisting(req.params.id)
    .then(() => {
      setTimeout(() => {
        res.redirect('/admin');
      }, 1000);
    })
    .catch(err => {
      console.log(err.message);
    });
});

router.post('/:id/sold', (req, res) => {
  admin.markLitingAsSold(req.params.id)
    .then(() => {
      res.redirect(`/listing/${req.params.id}`);
    })
    .catch(err => {
      console.log(err.message);
    });
});

module.exports = router;
