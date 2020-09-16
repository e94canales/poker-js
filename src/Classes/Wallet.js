export default class Wallet {
    constructor(chips) {
        this.chips = chips
        this.balance = 0
        this.chips.forEach( chip => {this.balance+=chip.value})
    }

    calculatebal() {
        this.chips.forEach( chip => {this.balance+=chip.value})
    }
}