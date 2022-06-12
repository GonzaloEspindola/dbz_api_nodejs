const navCharacterContainer = document.getElementById('nav_character');
const mainCharacterImg = document.getElementById('main_character_img_container');
const mainCharacterInfo = document.getElementById('main_character_info');


async function getNavCharacters () {
    await fetch("https://dragon-ball-super-api.herokuapp.com/api/characters?limit=10")
    .then(res => res.json())
    .then(res => {
        res[0].map(character => {
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
    universeP.innerHTML = `&nbsp${universe}`;
    originplanetP.innerHTML = `&nbsp${originplanet}`;
}

getNavCharacters()