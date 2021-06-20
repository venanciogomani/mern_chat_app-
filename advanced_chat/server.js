const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require("cors");

const users = require("./routes/api/users");
const messages = require("./routes/api/messages");

const app = express();

// Port that the webserver listens to
const port = process.env.PORT || 5000;

const server = app.listen(port, () =>
  console.log(`Server running on port ${port}`)
);

const io = require("socket.io").listen(server);

// Middleware to parse request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS middleware
app.use(cors());

// Database configuration
const db = require("./config/keys").mongoURI;

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('Connected to MongoDB')
});

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

// Assign socket object to every request
app.use(function (req, res, next) {
  req.io = io;
  next();
});

// Routes
app.use("/api/users", users);
app.use("/api/messages", messages);
