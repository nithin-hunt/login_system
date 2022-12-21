const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv");
const path = require("path");
const hbs = require("hbs");

const app = express();

dotenv.config({
    path: "./env",
});

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0232',
    database: 'login_crud'
});

db.connect((e) => {
    if(e){
        console.log(e);
    } else {
    console.log('MySql Connected');
    }
});

app.use(express.urlencoded({extended: false}));

const location = path.join(__dirname, "./public");
app.use(express.static(location));
app.set("view engine", "hbs");

const partialsPath = path.join(__dirname, "./views/partials");
hbs.registerPartials(partialsPath);

app.use("/", require("./routes/pages"));
app.use("/auth", require("./routes/auth"));

app.listen(5000, () => {
    console.log("Server started @ port 5000");
});

