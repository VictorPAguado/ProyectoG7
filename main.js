let baseUrl = "http://localhost:5000/players";

const playerList$$ = document.querySelector('.player--list');
const inputTeam$$ = document.querySelector('.filter__team--input');
const inputName$$ = document.querySelector('.filter__name--input');
const arrayPlayers = []
const fetchUrl = async (url) => {
    try {
        const response = await fetch(url);
        const responseJson = await response.json();
        responseJson.forEach(player => {
            arrayPlayers.push(player);
            drawPlayer(player);
        });
        console.log(arrayPlayers);
    } catch (error) {
        console.log("Error: ",error);
    }
}

const drawPlayer = async(player) => {

    let name = player.name;
    let surname = player.surname;
    let age = player.age;
    let team = player.team[0].name;

    let divPlayer$$ = document.createElement('div');
    divPlayer$$.className = "player--list__div";
    let pName$$ = document.createElement('p');
    let pSurName$$ = document.createElement('p');
    let pAge$$ = document.createElement('p');
    let pTeam$$ = document.createElement('p');

    pName$$.textContent = name;
    pSurName$$.textContent = surname;
    pAge$$.textContent = age;
    pTeam$$.textContent = team;
    
    divPlayer$$.appendChild(pName$$);
    divPlayer$$.appendChild(pSurName$$);
    divPlayer$$.appendChild(pAge$$);
    divPlayer$$.appendChild(pTeam$$);
    playerList$$.appendChild(divPlayer$$);
}

const init = () => {
    fetchUrl(baseUrl);
}

const filter = () => {
    playerList$$.innerHTML= '';
    
    for(let i = 0; i < arrayPlayers.length; i++){
        if(arrayPlayers[i].name.toLowerCase().includes(inputName$$.value.toLowerCase()) && arrayPlayers[i].team[0].name.toLowerCase().includes(inputTeam$$.value.toLowerCase())){
            drawPlayer(arrayPlayers[i]);
        }
    }
}

// const modifyApi = () => {
//     playerList$$.innerHTML = ``;
//     const modifyDiv$$ = document.querySelector('.modify--filter');
    

// }

// const post = () => {

// }


init();

inputName$$.addEventListener('input', filter);
inputTeam$$.addEventListener('input', filter);
