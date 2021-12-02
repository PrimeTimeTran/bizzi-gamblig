const countOccurrences = (arr, val) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

function calculateSumOfCards(cards) {
  let total = 0;
  const values = cards.map((c) => {
    switch (c.value) {
      case "A":
        return "A";
      case "9":
        return 9;
      case "8":
        return 8;
      case "7":
        return 7;
      case "6":
        return 6;
      case "5":
        return 5;
      case "4":
        return 4;
      case "3":
        return 3;
      case "2":
        return 2;
      default:
        return 10;
    }
  });

  for (const value of values) {
    if (value !== "A") total += value;
  }

  let count = countOccurrences(values, "A");

  while (count > 0) {
    if (total + 11 <= 21) {
      total += 11;
    } else if (total + 10 <= 21) {
      total += 10;
    } else if (total + 1 <= 21) {
      total += 1;
    } else {
      total += 1;
    }
    count -= 1;
  }

  return total;
}

function shuffledCards() {
  const deck = DECK;
  for (var i = 0; i < 100; i++) {
    var location1 = Math.floor(Math.random() * 52);
    var location2 = Math.floor(Math.random() * 52);
    var tmp = deck[location1];
    deck[location1] = deck[location2];
    deck[location2] = tmp;
  }
  return deck;
}

export { shuffledCards, BACK, calculateSumOfCards };
