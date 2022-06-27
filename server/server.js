const express = require("express");
const app = express();

// const postgres = require("postgres");
const { Client } = require("pg");
const cors = require("cors");
const { response } = require("express");

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
  database: "InventoryDB",
  user: "postgres",
  password: "Glenn0833",
});

client.connect();

app.post("/createUser", (req, res) => {
  const username = req.body.user;
  const password = req.body.password;
  console.log(username, password);

  client.query(
    `insert into userInfo(username, password) values(${username}, ${password} )`,
    (err, result) => {
      if(!err){
        console.log(err);
      }else {
        console.log(result.rows);
      }
      client.end;
    }
  );
});

app.get("/login", (req, res) => {});
// something ges here as well
//const command = "SELECT * FROM userInfo WHERE name = ? AND password = ?";
//   db.query(command, [req.body.user, req.body.password], (err, result) => {
//     if (err) {
//       console.log(err);
//     }

//     if (result) {
//       console.log(result);
//       res.send(result);
//     } else {
//       console.log("Wrong username or password");
//     }
//   });
// });

app.post("/addProduct", (req, res) => {
  // Add prod
});

app.put("/updateProduct", (req, res) => {
  // Update product details
});

app.delete("/delProd", (req, res) => {});

app.listen(3001, () => {
  console.log("The DB is on !!!");
});
