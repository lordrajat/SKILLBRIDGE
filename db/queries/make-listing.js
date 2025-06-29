const db = require('../connection');

const createListing = (listing) => {

  const queryString = `
  INSERT INTO listings (listing_title, listing_description, image_url, user_id, price, sold_status, created_at)

  VALUES ($1, $2, $3, 1, $4, FALSE, NOW());
  `;
  console.log('listing',listing);
  const queryParams =
  [ listing.title, listing.description, listing.img, listing.price,
  ];

  return db.query(queryString, queryParams)
    .then(data => {
      return data.rows;
    });
};


module.exports = { createListing };
