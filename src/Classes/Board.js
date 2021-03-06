import { getChange, denominations } from "../Util/Functions"

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
        let contains = null
        let containedChip = null
        
        for (let i = 0; i < player.wallet.chips.length; i++){
            contains = false
            if (chip.value === player.wallet.chips[i].value){
                contains = true
                containedChip = player.wallet.chips[i]
                break
            }
        }
        if (contains === false){
            let highestValueChip = 0
            let rtnChip = null

            player.wallet.chips.forEach( walletchip => {
                if (walletchip.value > highestValueChip){
                    highestValueChip = walletchip.value
                    rtnChip = walletchip
            }})

            if (highestValueChip < chip.value){
                if (chip.value > player.wallet.balance){
                    console.log("INSUFFICIENT FUNDS")
                }
                let newWallet = denominations(player, chip)
                player.wallet.chips = newWallet

                for (let i = 0; i < player.wallet.chips.length; i++){
                    if (chip.value === player.wallet.chips[i].value){
                        player.wallet.chips.splice(i, 1)
                        console.log(`${"CHIP REMOVED"} -> ${player.wallet.chips[i].value}`)
                        break
                    }
                }
                player.wallet.balance -= chip.value
                console.log(player)
                return
            }
            else {
                console.log("getChange")
                let change = getChange(rtnChip, chip)
                change.forEach( c => player.wallet.chips.push(c))
                player.wallet.chips.splice(player.wallet.chips.indexOf(rtnChip), 1)
            }
        }
        player.wallet.chips.splice(player.wallet.chips.indexOf(containedChip), 1)
        player.wallet.balance -= chip.value
        console.log(player)
        console.log(this)
        return
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

    getResult(players){
        let playerHands = {}
        for (let i = 0; i < players.length; i++){
            if (!(players[i].name in playerHands)){
                playerHands[players[i].name] = players[i].hand
            }
        }
        console.log(playerHands)
    }

    payout(player, setPot) {
        let playerUpdated = player
        let pay = this.pot
        for (let i = 0; i < this.pot.length; i++){
            playerUpdated.wallet.chips.push(pay[i])
            playerUpdated.wallet.balance += pay[i].value
        }
        this.pot = []
        this.potbalance = 0
        setPot(0)
        console.log(player)
        console.log(this)
    }

}