const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");

//middleware
app.use(cors());

//Routes

//params => http://localhost:5000/:id => req.params
//query parameter => http://localhost:5000/?name=henry = req.query

app.get("/users", async (req, res) => {
  try {
    const { name } = req.query;

    //first_name last_name => %{}%
    //"Henry Ly" => %ly%
    // || => OR SQL || => Concat

    const users = await pool.query(
      "SELECT * FROM users WHERE first_name || ' ' || last_name ILIKE $1",
      [`%${name}%`]
    );

    //Below is EVIL CODE (SQL injection)

    // const users = await pool.query(
    //   `SELECT * FROM users WHERE first_name || ' ' || last_name ILIKE '% ${name}%'`
    // );

    //

    res.json(users.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("Server is starting on port 5000");
});
