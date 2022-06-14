const navCharacterContainer = document.getElementById('nav_character');
const mainCharacterImg = document.getElementById('main_character_img_container');
const mainCharacterInfo = document.getElementById('main_character_info');
const deployP = document.getElementById('deployP');
const personajesP = document.getElementById('personajesP');

var url = '';
var aleatoryNumber = random(1,9);
switch (aleatoryNumber) {
    case 1:
        url = 'https://dragon-ball-super-api.herokuapp.com/api/characters/role/Angel';
        break;
    case 2:
        url = 'https://dragon-ball-super-api.herokuapp.com/api/characters/role/Dios%20de%20la%20destruccion';
        break;
    case 3:
            url = 'https://dragon-ball-super-api.herokuapp.com/api/characters/role/Guerrero%20universo%202';
            break;
        case 4:
            url = 'https://dragon-ball-super-api.herokuapp.com/api/characters/role/Guerrero%20universo%203';
        break;
        case 5:
            url = 'https://dragon-ball-super-api.herokuapp.com/api/characters/role/Guerrero%20universo%204';
        break;
        case 6:
            url = 'https://dragon-ball-super-api.herokuapp.com/api/characters/role/Guerrero%20universo%206';
        break;
        case 7:
            url = 'https://dragon-ball-super-api.herokuapp.com/api/characters/role/Guerrero%20universo%209';
        break;
        case 8:
            url = 'https://dragon-ball-super-api.herokuapp.com/api/characters/role/Guerrero%20universo%2010';
        break;
        case 9:
            url = 'https://dragon-ball-super-api.herokuapp.com/api/characters/role/Guerrero%20universo%2012';
        break;
    }

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

async function getNavCharacters () {
    await fetch(url)
    .then(res => res.json())
    .then(res => {
        console.log(res)
        res.map(character => {
            var characterItemContainer = document.createElement('div');
            characterItemContainer.className = `character_item`;
            characterItemContainer.setAttribute('id', character.name);
            navCharacterContainer.appendChild(characterItemContainer);

            var imgitem = document.createElement('img');
            imgitem.setAttribute('src', character.imageUrl);
            imgitem.setAttribute('alt', character.name);
            imgitem.onclick=function(){setMainCharacter(character)};
            characterItemContainer.appendChild(imgitem);
        })
    })
}

function setMainCharacter(character) {
    const {id, imageUrl, name, originplanet, role, specie, status, transform, universe} = character;
    mainCharacterImg.setAttribute('src', imageUrl)

    const itemActive = document.getElementById(`${name}`)

    if(itemActive.classList.contains('active')){

    }else {        
        navCharacterContainer.childNodes.forEach(element => {
            element.className = 'character_item'
        });

        itemActive.classList += ' active';
    }

    const tittle = document.getElementById('tittle');
    // const roleImg = document.getElementById('roleImg');
    const roleP = document.getElementById('roleP');
    // const specieImg = document.getElementById('specieImg');
    const specieP = document.getElementById('specieP');
    // const statusImg = document.getElementById('statusImg');
    const statusP = document.getElementById('statusP');
    // const universeImg = document.getElementById('universeImg');
    const universeP = document.getElementById('universeP');
    const originplanetP = document.getElementById('originplanetP');

    tittle.innerText = `${name}`;
    roleP.innerHTML = `&nbsp${role}`;
    specieP.innerHTML = `&nbsp${specie}`;
    statusP.innerHTML = `&nbsp${status}`;
    personajesP.innerHTML = 'Universo:'
    universeP.innerHTML = `&nbsp${universe}`;
    deployP.innerHTML = 'Planeta de origen:'
    originplanetP.innerHTML = `&nbsp${originplanet}`;
}

getNavCharacters()