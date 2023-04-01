const express = require("express");
  const {
    getTeams,
    getTeamsById,
    getTeamsByName,
    getTeamsByLocation,
    postTeam,
    putTeam,
    deleteTeam
  } = require("../controllers/teams.controller");

const router = express.Router();

router.get("/", getTeams);
router.get("/:id", getTeamsById);
router.get("/name/:name", getTeamsByName);
router.get("/location/:location", getTeamsByLocation);
router.post("/", postTeam);
router.put("/:id", putTeam);
router.delete("/:id", deleteTeam);

module.exports = router;
