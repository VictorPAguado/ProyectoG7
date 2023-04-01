const League = require('../models/leagues.model');

const getLeagues = async (req, res) => {
  try {
    const allLeagues = await League.find().populate("teams","name");
    return res.status(200).json(allLeagues);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getLeaguesById = async (req, res) => {
  try {
    const {id} = req.params;
    const allLeagues = await League.findById(id).populate("teams","name");
    return res.status(200).json(allLeagues);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getLeaguesByName = async (req, res) => {
    try {
      const { name } = req.params;
      const allLeagues = await League.find({name:name}).populate("teams","name"); 
      return res.status(200).json(allLeagues);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  const getLeaguesByCountry = async (req, res) => {
    try {
      const { country } = req.params;
      const allLeagues = await League.find({country:country}).populate("teams","name"); 
      return res.status(200).json(allLeagues);
    } catch (error) {
      return res.status(500).json(error);
    }
  };


const postLeague = async (req, res) => {
  try {
    console.log(req.body);  
    const newLeague = new League(req.body);
    const createdLeague = await newLeague.save();
    return res.status(201).json(createdLeague);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putLeague = async (req, res) => {
  try {
    const { id } = req.params;
    const putLeague = new League(req.body);
    putLeague._id = id;

    const updateLeague = await League.findByIdAndUpdate(id, putLeague, {
      new: true,
    });
    if (!updateLeague) {
      return res.status(404).json({ message: "League not found" });
    }
    return res.status(200).json(updateLeague);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteLeague= async (req, res) => {
    try {
      const { id } = req.params;
      const deleteLeague = await Client.findByIdAndDelete(id); //Buscamos por id y borramos el elemento
      if (!deleteLeague) {
        return res.status(404).json({ message: "cliente not found" });
      }
      return res.status(200).json(deleteLeague);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

module.exports = {
    getLeagues,
    getLeaguesById,
    getLeaguesByName,
    getLeaguesByCountry,
    postLeague,
    putLeague,
    deleteLeague
};