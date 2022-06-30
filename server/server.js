const express = require("express");
const app = express();

// const postgres = require("postgres");
const { Client } = require("pg");
const cors = require("cors");
// const { response } = require("express");

const PORT = 3001;

app.use(cors());
app.use(express.json());

// const db = mysql.createConnection({
//   user: "root",
//   host: "localhost",
//   password: "password",
//   database: "inventoryDB",
// });

const client = new Client({
  host: "localhost",
  port: "5432",
  database: "inventorydb",
  user: "postgres",
  password: "password",
});

client.connect();

app.post("/createUser", (req, res) => {
  const username = req.body.user;
  const password = req.body.password;
  console.log(username, password);

  client.query(
    `insert into userinfo(username, password) values('${username}', '${password}' );`,
    (err, result) => {
      if(err){
        console.log(err);
      }else {
        console.log(result);
      }
      client.end;
    }
  );
  res.send(true);
});

app.post("/login", (req, res) => {
  // const command = `SELECT * FROM userinfo WHERE username = ? AND password = ?`;
  console.log (req); 
  client.query(`SELECT * FROM userinfo WHERE username = '${req.body.user}' AND password = '${req.body.password}'`, (err, result) => {
      // console.log(`SELECT * FROM userinfo WHERE username = '${req.body.user}' AND password = '${req.body.password}'`);
      // console.log(result);

      if (err) {
        console.log(err);
      }

      if (result) {
        res.send(result);
      } else {
        console.log("Wrong username or password");
      }
      client.end;
    });
    res.send(true);
});

app.post("/addProduct", (req, res) => {
  // Add prod
});

app.put("/updateProduct", (req, res) => {
  // Update product details
});

app.delete("/delProd", (req, res) => {});

app.listen(PORT, () => {
  console.log("The DB is on at ", PORT, "!!!");
});
