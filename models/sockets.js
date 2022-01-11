const BandList = require("./band-list");

class Sockets {
    constructor( io ){
        this.io = io;
        this.bandList = new BandList()
        this.socketsEvents()
    }

    socketsEvents(){
        this.io.on('connection', ( socket ) => {
            console.log('Cliente conectado');

            socket.emit('current-bands', this.bandList.getBands())
            
            socket.on("votar", (data) => {
                this.bandList.increaseVotes(data.id)
                this.io.emit('current-bands', this.bandList.getBands())
            })

            socket.on("borrar", (data) => {
                this.bandList.removeBand(data.id)
                this.io.emit('current-bands', this.bandList.getBands())
            })

            socket.on("change-name", (data) => {
                this.bandList.updateBand(data.id, data.name)
                this.io.emit('current-bands', this.bandList.getBands())
            })

            socket.on("add-band", (name) => {
                this.bandList.addBand(name)
                this.io.emit('current-bands', this.bandList.getBands())
            })
        });
    }
}

module.exports = Sockets