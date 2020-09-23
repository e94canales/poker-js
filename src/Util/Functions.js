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
    if (player.hand.length < 5){
        let rtnCard = deck[roll(4)][roll()]
        while (player.hand.includes(rtnCard)){
            rtnCard = deck[roll(4)][roll()]
        }
        player.hand.push(rtnCard)
    }
    else {
        return
    }
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
    }
    return rtnArray
}

export function clearAll(players, deck) {
    for (let i = 0; i < players.length; i++){
        players[i].hand = []
        if (players[i].name !== "dealer"){
            deal(players[i], deck)
        }
        else{
            draw(players[i], deck)
        }
    }
}

export function checkResults(players){
    let handToMatch = players[0].hand
    for (let i = 0; i < handToMatch.length; i++){
        for (let j = 1; j < players.length; j++){
            if (players[j].hand[0].value === handToMatch[i].value){
                console.log(players[j].hand[0].points);
                players[j].score += players[j].hand[0].points
            }
            else if (players[j].hand[1].value === handToMatch[i].value){
                console.log(players[j].hand[1].points);
                players[j].score += players[j].hand[1].points
            }
        }
    }

    checkStraight(players)
    if (players[1].score === 0 && players[2].score === 0){
        console.log("No Winner!")
        return
    }
    if (players[1].score > players[2].score) {
        console.log(`${players[1].name}(${players[1].score}) wins!`)
        return
    }
    if (players[2].score > players[1].score) {
        console.log(`${players[2].name}(${players[2].score}) wins!`)
        return
    }
    if (players[1].score === players[2].score) {
        console.log(`${players[1].name}(${players[1].score}) & ${players[2].name}(${players[2].score}) win!`)
        return
    }
    

    players.forEach( p => p.score = 0)
}

export function checkStraight(players){

    players.forEach( player => {
        if (player.name !== "dealer"){

            player.hand.forEach( card => {
                player.sorted.push(card.value)
            })

            players[0].hand.forEach( card => {
                player.sorted.push(card.value)
            })

            player.sorted.filter((card, index) => player.sorted.indexOf(card) === index)
            player.sorted.sort((a, b) => a-b)
            player.sorted = [...new Set(player.sorted)]

            player.sorted.forEach((card, i) => {

                if (player.sorted[i] + 1 === player.sorted[i + 1] && player.straight.length < 5) {
                    player.straight.push(player.sorted[i])
                    player.straight.push(player.sorted[i + 1])
                    player.straight = [...new Set(player.straight)]
                }
                else if (player.sorted[i] + 1 !== player.sorted[i + 1] && player.sorted[i + 1] !== undefined && i < 3){
                    player.straight = []
                }
            })

            if (player.straight.length === 5){
                player.score += 50
                console.log(player.straight);
                player.sorted = []
                player.straight = []
                return true
            }
            
            player.sorted = []
            player.straight = []
            return false
        }
    })
}
