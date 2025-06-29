const db = require('../connection');

const getFavourites = () => {

  const queryString = `
  SELECT listings.id, listings.listing_title, listings.price, listings.image_url, favourites.id AS favourites_id
  FROM listings
  join favourites
  ON favourites.listing_id = listings.id;`;



  return db.query(queryString)
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const deleteFavourites = (favouriteId) => {

  const queryParams = [ favouriteId ];

  const queryString = `
  DELETE FROM favourites
  WHERE  id = $1`;

  return db.query(queryString, queryParams)
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};


module.exports = { getFavourites, deleteFavourites };
