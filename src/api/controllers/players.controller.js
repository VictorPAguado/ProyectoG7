const Player = require("../models/players.model");

// const getPlayers = async (req, res) => {
//   try {
//     let {page, limit} = req.query;
//     console.log(page)
//     const numPlayers = await Player.countDocuments();
//     limit = limit ? parseInt(limit) : 10;
//     if(page && !isNaN(parseInt(page))){
//       console.log("entro")
//       page = parseInt(page);
//       console.log(page)
//       let numPages = numPlayers % limit > 0 ? numPlayers / limit + 1 : numPlayers / limit;

//       if(page> numPages) page = numPages;

//       if(page < 1) page = 1;

//       const skip = (page - 1) * limit; 

//       const Players = await Player.find().populate("team","name").skip(skip).limit(limit)
//       return res.status(200).json(
//         {
//           info: {
//             numTotal: numPlayers,
//             page: page,
//             limit: limit,
//             nextPage: numPages >= page + 1 ? `/players?page=${page + 1}&limit=${limit}` : null,
//             prevPage: page != 1 ? `/players?page=${page - 1}&limit=${limit}` : null
//           },
//           results:Players
//         }
//       )

//     }else{
//       const players = await Player.find().populate("team","name").limit(limit);
//       return res.status(200).json({
//         info: {
//           numTotal: numPlayers,
//           page: 1,
//           limit: limit,
//           nextPage: numPlayers > limit ? `/players?page=2&limit=${limit}` : null,
//           prevPage: null
//         },
//         results: players
//       });
//     }

//   } catch (error) {
//     return res.status(500).json(error);
//   }
// };

const getPlayers = async (req, res) => {
  try {
    const {id} = req.params;
    const allPlayers = await Player.find().populate("team","name"); 
    return res.status(200).json(allPlayers);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getPlayersById = async (req, res) => {
  try {
    const {id} = req.params;
    const allPlayers = await Player.findById(id).populate("team","name"); 
    return res.status(200).json(allPlayers);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getPlayersByName = async (req, res) => {
    try {
      const { name } = req.params;
      const allPlayers = await Player.find({name:name}).populate("team","name"); 
      return res.status(200).json(allPlayers);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  const getPlayersByNationality = async (req, res) => {
    try {
      const { nationality } = req.params;
      const allPlayers = await Player.find({nationality:nationality}).populate("team","name"); 
      return res.status(200).json(allPlayers);
    } catch (error) {
      return res.status(500).json(error);
    }
  };


const postPlayer = async (req, res) => {
  try {
    console.log(req.body);  
    const newPlayer = new Player(req.body);
    const createdPlayer = await newPlayer.save();
    return res.status(201).json(createdPlayer);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putPlayer = async (req, res) => {
  try {
    const { id } = req.params;
    const putPlayer = new Player(req.body);
    putPlayer._id = id;

    const updatePlayer = await Player.findByIdAndUpdate(id, putPlayer, {
      new: true,
    });
    if (!updatePlayer) {
      return res.status(404).json({ message: "Player not found" });
    }
    return res.status(200).json(updatePlayer);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deletePlayer = async (req, res) => {
    try {
      const { id } = req.params;
      const deletePlayer = await Client.findByIdAndDelete(id); //Buscamos por id y borramos el elemento
      if (!deletePlayer) {
        return res.status(404).json({ message: "player not found" });
      }
      return res.status(200).json(deletePlayer);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

module.exports = {
    getPlayers,
    getPlayersById,
    getPlayersByName,
    getPlayersByNationality,
    postPlayer,
    putPlayer,
    deletePlayer
};