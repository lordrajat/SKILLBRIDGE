DROP TABLE IF EXISTS listings CASCADE;
CREATE TABLE listings (
  id SERIAL PRIMARY KEY NOT NULL,
  listing_title VARCHAR(255) NOT NULL,
  listing_description VARCHAR(255) NOT NULL,
  image_url VARCHAR(255) NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  price INTEGER NOT NULL,
  sold_status BOOLEAN,
  created_at TIMESTAMP
);
