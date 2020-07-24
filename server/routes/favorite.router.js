const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

// return all favorite images
router.get("/", (req, res) => {
  console.log("GET /api/favorite");
  pool
    .query('SELECT * from "favorite";')
    .then((result) => {
      console.log("in /api/favorite GET");
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error GET /api/favorite", error);
      res.sendStatus(500);
    });
});

// add a new favorite
router.post("/", (req, res) => {
  res.sendStatus(200);
});

router.put("/", (req, res) => {
  // return all categories
  console.log("In favorite router PUT. req.body is", req.body);
  const queryText = `UPDATE favorite SET category_id = ${req.body.category} WHERE id = ${req.body.id};`; // this should be UPDATE... and update the categories
  pool
    .query(queryText)
    .then((result) => {
      console.log("in /api/category GET");
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

// delete a favorite
router.delete("/", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
