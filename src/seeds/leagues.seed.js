const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const League = require('../api/models/leagues.model');

const arrayLeagues = [
    {
        "name": "La Liga",
        "country": "Spain",
        "teams": []
    },
    {
        "name": "Premier League",
        "country": "England",
        "teams": []
    },
    {
        "name": "Serie A",
        "country": "Italy",
        "teams": []
    },
    {
        "name": "Bundesliga",
        "country": "Germany",
        "teams": []
    }
]
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(async() => {
    const allLeagues = await League.find();
    if(allLeagues.length){
        await League.collection.drop();
        console.log("Leagues deleted");
    };
})
.catch((err) => console.log("Failure deleting leagues", err))
.then(async() => {
    const leaguesMap = arrayLeagues.map((league) => new League(league));
    await League.insertMany(leaguesMap);
    console.log("Leagues inserted");
})
.catch((err) => console.log("Failure inserting leagues", err))
.finally(() => mongoose.disconnect());