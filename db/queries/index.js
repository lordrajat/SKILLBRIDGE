
const db = require('../connection');


// Get 9 products to populate index.ejs
const getPopularProducts = () => {

  const queryString = `
  SELECT listings.id AS id, listings.listing_title, (listings.price / 100) AS dollars, listings.image_url FROM listings
  ORDER BY created_at DESC LIMIT 9;
  `;

  return db.query(queryString)
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const favouriteListing = (listingId) => {

  const queryString = `
  INSERT INTO favourites (listing_id, user_id)
  VALUES ($1, 1)
  `;

  const queryParams = [
    listingId
  ];

  return db.query(queryString, queryParams)
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const getProductListing = (id) => {

  const queryParams = [
    id
  ];

  const queryString = `
  SELECT listings.id AS id, listings.sold_status AS sold_status, listings.listing_title, listings.listing_description, (listings.price / 100) AS dollars, listings.image_url FROM listings
  WHERE id = $1;
  `;

  return db.query(queryString, queryParams)
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });


};




module.exports = { getPopularProducts, favouriteListing, getProductListing };
