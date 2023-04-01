const express = require("express");
const {
  getPlayers,
  getPlayersById,
  getPlayersByName,
  getPlayersByNationality,
  postPlayer,
  putPlayer,
  deletePlayer
} = require("../controllers/players.controller");
const router = express.Router();

router.get("/", getPlayers);
router.get("/:id", getPlayersById);
router.get("/name/:name", getPlayersByName);
router.get("/nationality/:nationality", getPlayersByNationality);
router.post("/", postPlayer);
router.put("/:id", putPlayer);
router.delete("/:id", deletePlayer);
module.exports = router;
