export default class Player {
    constructor(name, wallet, hand, type){
        this.name = name
        this.wallet = wallet
        this.hand = hand
        this.type = type
        this.score = 0
        this.straight = []
        this.sorted = []
    }
}