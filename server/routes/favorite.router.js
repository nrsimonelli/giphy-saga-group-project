const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

// return all favorite images
router.get("/", (req, res) => {
  console.log("GET /api/favorite");
  pool
    .query('SELECT * from "favorite";')
    .then((result) => {
      console.log("in /api/favorite GET result.rows is", result.rows);
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

// update given favorite with a category id
router.put("/:favId", (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete("/", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
