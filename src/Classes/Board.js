export default class Board {
    constructor(pot = [], seats = 4, players = []){
        this.pot = pot
        this.potbalance = 0
        this.seats = seats
        this.players = players
        this.availableseats = this.seats - this.players.length
    }

    join(player) {
        this.players.push(player)
        this.availableseats = this.seats - this.players.length
    }

    wager(chip, player) {
        this.pot.push(chip)
        this.potbalance += chip.value
        player.wallet.chips.splice(player.wallet.chips.indexOf(chip), 1)
        player.wallet.balance -= chip.value
        console.log(this);
        console.log(player)
    }

    stand(player) {
        this.players.splice(this.players.indexOf(player), 1)
        this.availableseats = this.seats - this.players.length
    }

    seatsAvailable() {
        return this.availableseats
    }

    getBalance(){
        return this.potbalance
    }

}