const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const Player = require('../api/models/players.model');

const arrayPlayers = [
    {
        "name": "Karim",
        "surname": "Benzema",
        "nationality": "France",
        "age": 35
    },
    {
        "name": "Eder",
        "surname": "Militao",
        "nationality": "Brazil",
        "age": 25
    },
    {
        "name": "Luka",
        "surname": "Modric",
        "nationality": "Croatia",
        "age": 37
    },
    {
        "name": "Thibaut",
        "surname": "Courtois",
        "nationality": "Belgium",
        "age": 30
    },
    {
        "name": "Robert",
        "surname": "Lewandowski",
        "nationality": "Poland",
        "age":34
    },
    {
        "name": "Pedro",
        "surname": "Gonzalez",
        "nationality": "Spain",
        "age": 20
    },
    {
        "name": "Ronald",
        "surname": "Araujo",
        "nationality": "Uruguay",
        "age": 24
    },
    {
        "name": "Pablo",
        "surname": "Gavira",
        "nationality": "Spain",
        "age": 18
    },
    {
        "name": "Antoine",
        "surname": "Griezman",
        "nationality": "France",
        "age": 32
    },
    {
        "name": "Rodrigo",
        "surname": "De Paul",
        "nationality": "Argentina",
        "age": 28
    },
    {
        "name": "Jorge",
        "surname": "Resurreccion",
        "nationality": "Spain",
        "age": 31
    },
    {
        "name": "Jan",
        "surname": "Oblak",
        "nationality": "Slovenia",
        "age": 30
    },
    {
        "name": "Yassine",
        "surname": "Bounou",
        "nationality": "Morocco",
        "age": 31
    },
    {
        "name": "Ivan",
        "surname": "Rakitic",
        "nationality": "Croatia",
        "age": 35
    },
    {
        "name": "Marcos",
        "surname": "Acuña",
        "nationality": "Argentina",
        "age": 31
    },
    {
        "name": "Gonzalo",
        "surname": "Montiel",
        "nationality": "Argentina",
        "age": 26
    },
    {
        "name": "Erling",
        "surname": "Haaland",
        "nationality": "Denmark",
        "age": 22
    },
    {
        "name": "Kevin",
        "surname": "De Bruyne",
        "nationality": "Belgium",
        "age": 31
    },
    {
        "name": "Aymeric",
        "surname": "Laporte",
        "nationality": "Spain",
        "age": 28
    },
    {
        "name": "Ederson",
        "surname": "Moraes",
        "nationality": "Brazil",
        "age": 29
    },
    {
        "name": "Marcus",
        "surname": "Rashford",
        "nationality": "England",
        "age": 25
    },
    {
        "name": "Carlos",
        "surname": "Casemiro",
        "nationality": "Brazil",
        "age": 31
    },
    {
        "name": "Bruno",
        "surname": "Fernandes",
        "nationality": "Portugal",
        "age":28
    },
    {
        "name": "Harry",
        "surname": "Maguire",
        "nationality": "England",
        "age": 30
    },
    {
        "name": "Mohamed",
        "surname": "Salah",
        "nationality": "Egypt",
        "age": 30
    },
    {
        "name": "Virgil",
        "surname": "Van Dijk",
        "nationality": "Netherlands",
        "age": 31
    },
    {
        "name": "Trent",
        "surname": "Alexander-Arnold",
        "nationality": "England",
        "age": 24
    },
    {
        "name": "Alisson",
        "surname": "Becker",
        "nationality": "Brazil",
        "age": 30
    },
    {
        "name": "Martin",
        "surname": "Odegaard",
        "nationality": "Norway",
        "age": 24
    },
    {
        "name": "Bukayo",
        "surname": "Saka",
        "nationality": "England",
        "age": 21
    },
    {
        "name": "Ben",
        "surname": "White",
        "nationality": "England",
        "age": 25
    },
    {
        "name": "Emily",
        "surname": "Smith Rowe",
        "nationality": "England",
        "age": 22
    },
    {
        "name": "Zlatan",
        "surname": "Ibrahimovic",
        "nationality": "Sweden",
        "age": 41
    },
    {
        "name": "Rafael",
        "surname": "Leao",
        "nationality": "Portugal",
        "age": 23
    },
    {
        "name": "Mike",
        "surname": "Maignan",
        "nationality": "France",
        "age": 27
    },
    {
        "name": "Sandro",
        "surname": "Tonali",
        "nationality": "Italy",
        "age": 22
    },
    {
        "name": "Romelu",
        "surname": "Lukaku",
        "nationality": "Belgium",
        "age": 29
    },
    {
        "name": "Nicolo",
        "surname": "Barella",
        "nationality": "Italy",
        "age": 26
    },
    {
        "name": "Paul",
        "surname": "Pogba",
        "nationality": "France",
        "age": 30
    },
    {
        "name": "Angel",
        "surname": "Di Maria",
        "nationality": "Argentina",
        "age": 35
    },
    {
        "name": "Dusan",
        "surname": "Vlahovic",
        "nationality": "Serbia",
        "age": 23
    },
    {
        "name": "Federico",
        "surname": "Chiesa",
        "nationality": "Italy",
        "age": 25
    },
    {
        "name": "Victor",
        "surname": "Osimhen",
        "nationality": "Nigeria",
        "age":24
    },
    {
        "name": "Khvicha",
        "surname": "Kvaratskhelia",
        "nationality": "Georgia",
        "age": 22
    },
    {
        "name": "Matteo",
        "surname": "Politano",
        "nationality": "Italy",
        "age": 29
    },
    {
        "name": "Kim",
        "surname": "Min-jae",
        "nationality": "South Korea",
        "age": 26
    },
    {
        "name": "Manuel",
        "surname": "Neuer",
        "nationality": "Germany",
        "age": 36
    },
    {
        "name": "Sadio",
        "surname": "Mané",
        "nationality": "Senegal",
        "age": 30
    },
    {
        "name": "Jamal",
        "surname": "Musiala",
        "nationality": "Germany",
        "age": 20
    },
    {
        "name": "Alphonso",
        "surname": "Davies",
        "nationality": "Canada",
        "age": 22
    },
    {
        "name": "Jude",
        "surname": "Bellingham",
        "nationality": "England",
        "age": 19
    },
    {
        "name": "Marco",
        "surname": "Reus",
        "nationality": "Germany",
        "age": 33
    },
    {
        "name": "Emre",
        "surname": "Can",
        "nationality": "Germany",
        "age": 29
    },
    {
        "name": "Sebastien",
        "surname": "Haller",
        "nationality": "Ivory Coast",
        "age": 28
    },
    {
        "name": "Moussa",
        "surname": "Diaby",
        "nationality": "France",
        "age": 23
    },
    {
        "name": "Florian",
        "surname": "Wirtz",
        "nationality": "Germany",
        "age": 19
    },
    {
        "name": "Patrick",
        "surname": "Schick",
        "nationality": "Czech Replublic",
        "age": 27
    },
    {
        "name": "Jeremie",
        "surname": "Frimpong",
        "nationality": "Netherlands",
        "age": 22
    },
    {
        "name": "Christopher",
        "surname": "Nkunku",
        "nationality": "France",
        "age": 25
    },
    {
        "name": "Josko",
        "surname": "Gvardiol",
        "nationality": "Croatia",
        "age": 21
    },
    {
        "name": "Timo",
        "surname": "Werner",
        "nationality": "Germany",
        "age": 27
    },
    {
        "name": "Dani",
        "surname": "Olmo",
        "nationality": "Spain",
        "age": 24
    }
]

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(async() => {
    const allPlayers = await Player.find();
    if(allPlayers.length){
        await Player.collection.drop();
        console.log("Players deleted");
    };
})
.catch((err) => console.log("Failure deleting players", err))
.then(async() => {
    const playersMap = arrayPlayers.map((player) => new Player(player));
    await Player.insertMany(playersMap);
    console.log("Players inserted");
})
.catch((err) => console.log("Failure inserting players", err))
.finally(() => mongoose.disconnect());