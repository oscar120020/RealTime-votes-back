const Band = require("./band");

class BandList {
    constructor(){
        this.bands = [
            new Band("Bad Bunny"),
            new Band("Myke Towers"),
            new Band("Ricardo Arjona"),
            new Band("Ozuna"),
        ]
    }

    addBand(name){
        const newBand = new Band(name)
        this.bands.push(newBand)
    }

    getBands(){
        return this.bands
    }

    removeBand(id){
        this.bands = this.bands.filter(band => band.id !== id)
    }

    increaseVotes(id){
        this.bands = this.bands.map(band => {
            if (band.id === id){
                band.votes += 1
            }
            return band
        })
    }

    updateBand(id, name){
        this.bands = this.bands.map(band => {
            if (band.id === id){
                band.name = name
            }
            return band
        })
    }
}

module.exports = BandList;