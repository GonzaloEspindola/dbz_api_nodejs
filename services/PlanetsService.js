class PlanetsService {

    constructor(){
        this.planets = [];
        this.generate();
    }

    async generate(){
        this.planets.push({
            name: "Tierra",
            universo: "7",
            id: "1"
        },
        {
            name: "Planeta Vegeta",
            especie: "7",
            id: "2"
        })
    }

    async find(){
        return this.planets;
    }

    async findOne(id){
        return this.planets.find(item => item.id === id);
    }
}

module.exports = PlanetsService;