const mysql = require("mysql");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0232',
    database: 'login_crud'
});

const registeration = (req,res) => {
    // console.log(req.body);
    // res.send("Form Submitted");
   /*
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const confirm_password = req.body.confirm_password; */
   
    const {name, email, password, confirm_password} = req.body;
    db.query("select email from users where email=?", [email], (error,result) => {
        if(error) {
            console.log(error);
        }

        if(result.length > 0) {
            return res.render("register", {msg: "Email id already exists"});
        }
    });
}

module.exports = registeration;
