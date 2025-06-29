const express = require('express');
const router  = express.Router();
const index = require('../db/queries/index');

router.get('/', (req, res) => {

  index.getPopularProducts()
    .then(listings => {
      console.log(listings);
      res.render("index.ejs", {listings});
    })
    .catch(err => {
      console.log(err.message);
    });
});

router.post('/listing/:id/favourite', (req, res) => {
  const data = req;
  console.log(data);
  index.favouriteListing(data.params.id)
    .then(() => {
      res.redirect('/profile');
    })
    .catch(err => {
      console.log(err.message);
    });
});

// Get individual product listing
router.get('/listing/:id/', (req, res) => {
  const id = req.params.id;
  index.getProductListing(id)
    .then((listings) => {
      res.render("product-page", {listings});
    })
    .catch(err => {
      console.log(err.message);
    });
});






module.exports = router;
