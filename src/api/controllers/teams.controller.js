const Team = require("../models/teams.model");

const getTeams = async (req, res) => {
  try {
    let {page, limit} = req.query;
    console.log(page)
    const numTeams = await Team.countDocuments();
    limit = limit ? parseInt(limit) : 5;
    if(page && !isNaN(parseInt(page))){
      console.log("entro")
      page = parseInt(page);
      console.log(page)
      let numPages = `numTeams % limit > 0 ? numTeams / limit + 1 : numTeams / limit`;

      if(page> numPages) page = numPages;

      if(page < 1) page = 1;

      const skip = (page - 1) * limit; 

      const Teams = await Team.find().populate("players","name surname").skip(skip).limit(limit)
      return res.status(200).json(
        {
          info: {
            numTotal: numTeams,
            page: page,
            limit: limit,
            nextPage: numPages >= page + 1 ? `/teams?page=${page + 1}&limit=${limit}` : null,
            prevPage: page != 1 ? `/teams?page=${page - 1}&limit=${limit}` : null
          },
          results:Teams
        }
      )

    }else{
      const teams = await Team.find().populate("players","name surname").limit(limit);
      return res.status(200).json({
        info: {
          numTotal: numTeams,
          page: 1,
          limit: limit,
          nextPage: numTeams > limit ? `/teams?page=2&limit=${limit}` : null,
          prevPage: null
        },
        results: teams
      });
    }

  } catch (error) {
    return res.status(500).json(error);
  }
};

const getTeamsById = async (req, res) => {
 
  try {
    const {id} = req.params;
    const allTeams = await Team.findById(id).populate("players","name surname"); 
    return res.status(200).json(allTeams);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getTeamsByName = async (req, res) => {
    try {
      const { name } = req.params;
      const allTeams = await Team.find({name:name}).populate("players", "name surname"); 
      return res.status(200).json(allTeams);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  const getTeamsByLocation = async (req, res) => {
    try {
      const { location } = req.params;
      const allTeams = await Team.find({location:location}).populate("players", "name surname"); 
      return res.status(200).json(allTeams);
    } catch (error) {
      return res.status(500).json(error);
    }
  };


const postTeam = async (req, res) => {
  try {
    console.log(req.body);  
    const newTeam = new Team(req.body);
    const createdTeam = await newTeam.save();
    return res.status(201).json(createdTeam);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putTeam = async (req, res) => {
  try {
    const { id } = req.params;
    const putTeam = new Team(req.body);
    putTeam._id = id;
    const updateTeam = await Team.findByIdAndUpdate(id, putTeam, {
      new: true,
    });
    if (!updateTeam) {
      return res.status(404).json({ message: "Team not found" });
    }
    return res.status(200).json(updateTeam);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteTeam = async (req, res) => {
    try {
      const { id } = req.params;
      const deleteTeam = await Team.findByIdAndDelete(id); //Buscamos por id y borramos el elemento
      if (!deleteTeam) {
        return res.status(404).json({ message: "team not found" });
      }
      return res.status(200).json(deleteTeam);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

module.exports = {
    getTeams,
    getTeamsById,
    getTeamsByName,
    getTeamsByLocation,
    postTeam,
    putTeam,
    deleteTeam
};