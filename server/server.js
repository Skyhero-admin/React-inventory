require('dotenv').config;
const express = require("express");
const app = express();
const bodyParser = require('body-parser');

const { Client } = require("pg");
const cors = require("cors");
const PORT = 3001;

// Domain white listing
const domainsFromEnv = process.env.CORS_DOMAINS || "https://skyhero-admin-react-inventory-v6prgxpjr3wv9x.github.dev/";
const whitelist = domainsFromEnv.split(",").map(item => item.trim())

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());

// DB Connection settings
const client = new Client({
  host: "localhost",
  port: "5432",
  database: "inventorydb",
  user: "postgres",
  password: "password",
});

client.connect();

// Register/Create users
app.post("/createUser", async(req, res) => {
  const username = req.body.user;
  const password = req.body.password;
  console.log(username, password);

  try {
    await client.query(
    `insert into userinfo(username, password) values('${username}', '${password}' );`,
    (err, result) => {
      if(err){
        console.log(err);
      }else {
        console.log(result);
        res.send(result.data);
      }
      client.end;
    }
  );
  } catch (error) {
    console.error(error.message);
  }
});

// Login users
app.post("/login", async(req, res) => {
  try {
    await client.query(`SELECT * FROM userinfo WHERE username = '${req.body.user}' AND password = '${req.body.password}'`, (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result.rowCount > 0) {
        console.log(req.body);
        res.send(result);
      } else {
        console.log("Wrong username or password");
      }
    });
  } catch (error) {
    console.error(error.message);
  }
  client.end;
});

// get all users
app.get("/all", async(req, res) => {
  try {
    await client.query("select * from userinfo;", (err, result) => {
      res.send(result.rows);
    });

  } catch (error) {
    console.error(error.message);
  }
  client.end;
})

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
