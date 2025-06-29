// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');
const createListingRoutes = require('./routes/create-listing');
const viewAllProductsRoutes = require('./routes/view-all-products.js');
const userProfileRoutes = require('./routes/user-profile');
const adminView = require('./routes/admin.js');
const productView = require('./routes/product-page.js');
const userMessage = require('./routes/messages.js');
const index = require('./routes/index.js');




// Mounet all resourc routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/users', userApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
app.use('/users', usersRoutes);
app.use('/create', createListingRoutes);
app.use('/view-all-products', viewAllProductsRoutes);
app.use('/profile', userProfileRoutes);
app.use('/admin', adminView);
app.use('/listing', productView);
app.use('/messages', userMessage);
app.use('/', index);

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

// Created our own index route file at ./routes/index.js
// app.get('/', (req, res) => {
//   res.render('index');
// });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
