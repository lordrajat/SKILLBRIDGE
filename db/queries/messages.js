const db = require('../connection');

const submitMessage = (id, message) => {

  const queryString = `
  INSERT INTO messages (user_id, messages, created_at)
  VALUES ($1, $2, NOW());
  `;

  const queryParams = [
    id,
    message
  ];

  return db.query(queryString, queryParams)
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const getAdminMessages = () => {
  return db.query('SELECT FROM messages WHERE user_id = 2;')
    .then((result) => {
      return result.rows[0];
    });
};

//-----------------------------------------------------------------

const submitUserMessage = (message) => {

  const queryString = `
  INSERT INTO messages (user_id, messages, created_at)
  VALUES (2, $1, NOW());
  `;

  const queryParams = [
    message
  ];

  return db.query(queryString, queryParams)
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};


const getMessages = (id) => {
  const queryString = `
  SELECT * FROM messages
  WHERE user_id = $1
  ORDER BY created_at DESC;
  `;

  const queryParams = [
    id
  ];

  return db.query(queryString, queryParams)
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};






module.exports = { submitMessage, getAdminMessages, getMessages, submitUserMessage };
