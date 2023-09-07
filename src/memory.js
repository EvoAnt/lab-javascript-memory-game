class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

  }

  shuffleCards(cards) {
    if (!this.cards) {
      return undefined;
    }

    for (let i = 0; i < this.cards.length; i++) {
      let randIndex = Math.floor(Math.random() * i);
      let temp = this.cards[i];

      this.cards[i] = this.cards[randIndex];
      this.cards[randIndex] = temp
    }

    return this.cards;

  }


  checkIfPair(card1, card2) {

    this.pairsClicked++;

    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }

    return false
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true
    }
    return false
  }
}