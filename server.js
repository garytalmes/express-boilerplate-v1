const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
const allowSync = (process.env.NODE_ENV === 'production') ? false : true

sequelize.sync({ force: allowSync }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
