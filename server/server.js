const express = require("express");
const bodyParser = require('body-parser')
const app = express();

const mysql = require("mysql");
const cors = require("cors");
const { response } = require("express");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json())

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'inventoryDB',
});

app.post("/createUser", (req, res) => {
    const username = req.body.user;
    const password = req.body.password;

    db.query(
        "insert into userInfo(name, password) values(?, ?)", [username, password],
        (err, result) => {
            if(err){
                console.error(err);
            }else{
                console.log(result);
                res.send("Data was added successfully");
            }
        }
    )
    // something goes here
});

app.get("/login", (req, res) => {

    // something ges here as well
    const command = 'SELECT * FROM userInfo WHERE name = ? AND password = ?';
    db.query( command, [req.body.user, req.body.password],
        (err, result) => {
            if(err){
                console.log(err);
            }
            
            if(result){
                console.log(result);
                res.send(result);
            }else{
                console.log("Wrong username or password");
            }
        }
    )
});

app.post("/addProduct", (req, res) => {
    // Add prod
})

app.put("/updateProduct", (req, res) => {
    // Update product details
})

app.delete("/delProd", (req, res) => {
    
})

app.listen(3001, () => {
    console.log("The DB is on !!!");
})