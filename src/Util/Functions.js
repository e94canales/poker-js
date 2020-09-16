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
