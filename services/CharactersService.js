class CharactersService {

    constructor(){
        this.characters = []
        this.generate();
    }

    async generate(){
        this.characters.push({
            name: "Goku",
            especie: "Saiyan",
            id: "1"
        },
        {
            name: "Vegeta",
            especie: "Saiyan",
            id: "2"
        })
    }

    async find(){
        return this.characters;
    }

    async findOne(id){
        return this.characters.find(item => item.id === id);
    }
}

module.exports = CharactersService;