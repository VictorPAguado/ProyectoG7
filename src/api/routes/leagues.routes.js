const express = require("express");

const {
  getLeagues,
  getLeaguesById,
  getLeaguesByName,
  getLeaguesByCountry,
  postLeague,
  putLeague,
  deleteLeague
} = require("../controllers/leagues.controller");

const router = express.Router();

router.get("/", getLeagues);
router.get("/:id", getLeaguesById);
router.get("/name/:name", getLeaguesByName);
router.get("/country/:country", getLeaguesByCountry);
router.post("/", postLeague);
router.put("/:id", putLeague);
router.delete("/:id", deleteLeague);

module.exports = router;