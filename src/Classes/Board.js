export default class Board {
    constructor(pot = [], seats = 4, players = []){
        this.pot = pot
        this.seats = seats
        this.players = players
        this.availableseats = this.seats - this.players.length
    }

    join(player) {
        this.players.push(player)
        this.availableseats = this.seats - this.players.length
    }

    bet(chips) {
        chips.forEach(chip => {this.pot.push(chip)})
    }

    stand(player) {
        this.players.splice(this.players.indexOf(player), 1)
        this.availableseats = this.seats - this.players.length
    }

    seatsAvailable() {
        return this.availableseats
    }

}