export default class Wallet {
    constructor(chips) {
        this.chips = chips
        this.balance = 0
        chips.forEach( chip => {this.balance+=chip.value})
    }
}