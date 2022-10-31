const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("../../../database/init");

app.use(cors());
app.use(express.json());

const handler = async (req, res) => {
  switch (req.method) {
    case "GET":
      try {
        const allTodos = await pool.query("SELECT * FROM empolyee");
        res.json(allTodos.rows);
      } catch (error) {
        console.log(error.message);
      }
      break;
    case "POST":
      try {
        const { author, company, img, pera } = req.body;
        const newTodo = await pool.query(
          "INSERT INTO empolyee (author, company, img, pera) VALUES($1, $2, $3, $4)",
          [author, company, img, pera]
        );
        res.json(newTodo);
      } catch (error) {
        console.log(error.message);
      }
      break;
    default:
      res.json({ error: "Method not allowed" });
      break;
  }
};
export default handler;
