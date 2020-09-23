export default class Card {
    constructor(name, value, suit, image, special, points = 1) {
        this.name = name
        this.value = value
        this.suit = suit
        this.image = image
        this.special = special
        this.points = points
    }
}