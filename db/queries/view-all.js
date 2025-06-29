const db = require('../connection');


// Get all listings to populate view-all-products.ejs
const getAllListings = () => {

  const queryString = `
  SELECT listings.id AS id, listings.listing_title, (listings.price / 100) AS dollars, listings.image_url AS image_url FROM listings
  ORDER BY created_at;
  `;

  return db.query(queryString)
    .then(data => {
      console.log(data);
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const GetHighestToLowestListings = () => {

  const queryString = `
  SELECT listings.id AS id, listings.listing_title, (listings.price / 100) AS dollars, listings.image_url AS image_url FROM listings
  ORDER BY dollars DESC;
  `;

  return db.query(queryString)
    .then(data => {
      console.log(data);
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const GetLowestToHighestListings = () => {

  const queryString = `
  SELECT listings.id AS id, listings.listing_title, (listings.price / 100) AS dollars, listings.image_url AS image_url FROM listings
  ORDER BY dollars;
  `;

  return db.query(queryString)
    .then(data => {
      console.log(data);
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { getAllListings, GetHighestToLowestListings, GetLowestToHighestListings };
