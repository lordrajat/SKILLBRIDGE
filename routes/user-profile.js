const express = require('express');
const router  = express.Router();
const favourite = require('../db/queries/user-profile');

router.get('/', (req, res) => {

  favourite.getFavourites()
    .then(favourites => {
      console.log(favourites);
      res.render("user-profile.ejs", {favourites});
    })
    .catch(err => {
      console.log(err.message);
    });
});




router.post('/:id/delete', (req, res) => {
  const data = req;
  console.log(data);
  favourite.deleteFavourites(data.params.id)
    .then(() => {
      res.redirect('/profile');
    })

    .catch(err => {
      console.log(err.message);
    });
});


module.exports = router;
