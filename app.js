const express = require("express");
const mysql = require("mysql");
const path = require("path");
const hbs = require("hbs");

require("dotenv").config();
const app = express();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB
});

db.connect((e) => {
    if(e){
        console.log(e);
    } else {
    console.log('MySql Connected');
    }
});

// Middlewares
app.use(express.urlencoded({extended: false}));

const location = path.join(__dirname, "./public");
app.use(express.static(location));
app.set("view engine", "hbs");

const partialsPath = path.join(__dirname, "./views/partials");
hbs.registerPartials(partialsPath);

// ROutes
app.use("/", require("./routes/pages"));
app.use("/auth", require("./routes/auth"));

app.listen(5000, () => {
    console.log("Server started @ port 5000");
});

