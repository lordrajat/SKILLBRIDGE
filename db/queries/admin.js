const db = require('../connection');

const getAdminCreatedListings = () => {

  const queryString = `
  SELECT * FROM listings ORDER BY created_at;
  `;

  return db.query(queryString)
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const deletelisting = (listingId) => {

  const queryParams = [listingId];

  const queryString = `
  DELETE FROM listings
  WHERE  id = $1`;

  return db.query(queryString, queryParams)
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const markLitingAsSold = (id) => {

  const queryParams = [id];

  const queryString = `
  UPDATE listings
  SET sold_status = TRUE
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


module.exports = { getAdminCreatedListings, deletelisting, markLitingAsSold };
