require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const authRoutes = require('./routes/auth.routes');
const sequelize = require('sequelize')

const app = express();

// Parse requests of content-type - application/json
app.use(bodyParser.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Sync database
// db.sequelize.sync();
db.sequelize.sync()
  .then(() => {
    console.log("Database synced successfully.");
  })
  .catch((err) => {
    console.log("Failed to sync database: " + err.message);
  });
// Routes
app.use('/api/auth', authRoutes);

app.use('/', function (req, res) {

  res.send("Hello Dhruv from SEQUELIZE-WITH-JWT-LOGIN Folder ")


});


// Set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
