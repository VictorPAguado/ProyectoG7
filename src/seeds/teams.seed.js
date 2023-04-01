const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const Team = require('../api/models/teams.model');

const arrayTeams = [
    {
        "name": "Real Madrid",
        "stadium": "Santiago Bernabeu",
        "location": "Madrid",
        "president": "Florentino Perez",
        "coach": "Carlo Ancelotti",
        "players": []
    },
    {
        "name": "F.C.Barcelona",
        "stadium": "Camp Nou",
        "location": "Barcelona",
        "president": "Joan Laporta",
        "coach": "Xavi Hernandez",
        "players": []
    },
    {
        "name": "Atletico Madrid",
        "stadium": "Wanda Metropolitano",
        "location": "Madrid",
        "president": "Enrique Cerezo",
        "coach": "Cholo Simeone",
        "players": []
    },
    {
        "name": "Sevilla",
        "stadium": "Ramon Sanchez-Pizjuan",
        "location": "Sevilla",
        "president": "Jose Castro",
        "coach": "Jorge Sampaoli",
        "players": []
    },
    {
        "name": "Manchester City",
        "stadium": "Etihad Stadium",
        "location": "Manchester",
        "president": "Khaldoon Al Mubarak",
        "coach": "Pep Guardiola",
        "players": []
    },
    {
        "name": "Manchester United",
        "stadium": "Old Trafford",
        "location": "Manchester",
        "president": "The Glazers",
        "coach": "Erik ten Hag",
        "players": []
    },
    {
        "name": "Liverpool",
        "stadium": "Anfield",
        "location": "Liverpool",
        "president": "Billy Hogan",
        "coach": "Jurgen Klopp",
        "players": []
    },
    {
        "name": "Arsenal",
        "stadium": "Emirates Stadium",
        "location": "London",
        "president": "Vinai Venkatesham",
        "coach": "Mikel Arteta",
        "players": []
    },
    {
        "name": "Milan",
        "stadium": "San Siro",
        "location": "Milan",
        "president": "Paolo Scaroni",
        "coach": "Stefano Piolo",
        "players": []
    },
    {
        "name": "Inter de Milan",
        "stadium": "San Siro",
        "location": "Milan",
        "president": "Steven Zhang",
        "coach": "Simone Inzage",
        "players": []
    },
    {
        "name": "Juventus",
        "stadium": "Juventus Stadium",
        "location": "Turin",
        "president": "Gianluca Ferrero",
        "coach":  "Massimiliano Allegri",
        "players": []
    },
    {
        "name": "Napoli",
        "stadium": "Stadio Diego Armando Maradona",
        "location": "Napoli",
        "president": "Aurelio De Laurentitis",
        "coach": "Luciano Spalletti",
        "players": []
    },
    {
        "name": "Bayern Munich",
        "stadium": "Allianz Arena",
        "location": "Munich",
        "president": "Oliver Khan",
        "coach": "Julian Nagelsmann",
        "players": []
    },
    {
        "name": "Borussia Dortmund",
        "stadium": "Signal Iduna Park",
        "location": "Dortmund",
        "president": "Hans-Joachim Watzke",
        "coach": "Edin Terzic",
        "players": []
    },
    {
        "name": "Bayer 04 Leverkusen",
        "stadium": "BayArena",
        "location": "Leverkusen",
        "president": "Fernando Carro",
        "coach": "Xabi Alonso",
        "players": []
    },
    {
        "name": "R.B. Leipzig",
        "stadium": "Red Bull Arena",
        "location": "Leipzig",
        "president": "Oliver Mintzlaff",
        "coach": "Marco Rose",
        "players": []
    },
]
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(async() => {
    const allTeams = await Team.find();
    if(allTeams.length){
        await Team.collection.drop();
        console.log("Teams deleted");
    };
})
.catch((err) => console.log("Failure deleting teams", err))
.then(async() => {
    const teamsMap = arrayTeams.map((team) => new Team(team));
    await Team.insertMany(teamsMap);
    console.log("Teams inserted");
})
.catch((err) => console.log("Failure inserting teams", err))
.finally(() => mongoose.disconnect());