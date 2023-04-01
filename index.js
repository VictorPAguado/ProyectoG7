const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {connect} = require('./src/utils/database');

const userRoutes = require('./src/api/routes/user.routes');
const leagueRoutes = require("./src/api/routes/leagues.routes");
const playersRoutes = require("./src/api/routes/players.routes");
const teamsRoutes = require("./src/api/routes/teams.routes");


dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
connect();

app.use((req, res , next) => {
    res.header('Access-Control-Allow-Method', 'POST, GET, DELETE, PUT, PATCH'); //Metodos que permitimos en la API
    res.header('Access-Control-Allow-Credentials', 'true'); //Permita la conexión con credenciales
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); 
    next(); //con el next pasamos a lo siguiente
})
app.use(cors({
    origin: ["http://localhost:5000", "http://localhost:4200", "http://nombre.vercel.com", "http://pepitoperez.com"],
    credentials: true
}))

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/user', userRoutes);
app.use('/leagues', leagueRoutes);
app.use('/players', playersRoutes);
app.use('/teams', teamsRoutes);

app.listen(PORT, () => console.log(`listening on: http://localhost:${PORT}`));
