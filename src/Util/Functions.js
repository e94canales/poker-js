import Chip from "../Classes/Chip"

export function roll(length = 13) {
    return Math.floor(Math.random() * length)
}

export function deal(player, deck) {
    let rtnCard1 = deck[roll(4)][roll()]
    let rtnCard2 = deck[roll(4)][roll()]

    while (rtnCard1 === rtnCard2){
        rtnCard1 = deck[roll(4)][roll()]
    }
    player.hand.push(rtnCard1)
    player.hand.push(rtnCard2)
}

export function draw(player, deck) {
    let rtnCard = deck[roll(4)][roll()]
    while (player.hand.includes(rtnCard)){
        rtnCard = deck[roll(4)][roll()]
    }
    player.hand.push(rtnCard)
}

export function getPotBal(arr) {
    let total = 0
    arr.forEach( chip => {
        total += chip.value
    })

    return total
}

export function getChange(chipToBreak, chipToGet) {
    switch (chipToGet.value) {
        case 1:
            return Array(chipToBreak.value / 1).fill(new Chip(1, ""))
        case 5:
            return Array(chipToBreak.value / 5).fill(new Chip(5, ""))
        case 10:
            return Array(chipToBreak.value / 10).fill(new Chip(10, ""))
        case 25:
            return Array(chipToBreak.value / 25).fill(new Chip(25, ""))
        case 50:
            return Array(chipToBreak.value / 50).fill(new Chip(50, ""))
        default:
            break
    }
}

export function setWagersState(setWager, wager, chiptype, setCurrentWager,currentWager){
    setWager([...wager, chiptype])
    setCurrentWager([...currentWager, chiptype])
}

export function denominations(player, chip = null){
    let d = [100, 50, 25, 10, 5, 1]

    let balance = player.wallet.balance
    let rtnArray = []

    let index = 0

    if (chip !== null){
        console.log("CHIP NOT NULL")
        index = d.indexOf(chip.value)
    }

    while (index < d.length){
        let aggregated = 0

        if (d[index] < balance){
            for (let i = 1; i <= balance / d[index]; i++){
                rtnArray.push(new Chip(d[index], ""))
                aggregated += d[index]
            }
        }
        balance -= aggregated
        index++
        console.log(aggregated)
    }
    return rtnArray
}
