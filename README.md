# Notes

# Rules

1. Seat 1 gets first card
2. No splitting
3. No double down

# Steps

1. State of app


# App State

```js
{
  appState: {
    step: 0,
      // 0. Pregame:
        // - Choose bet amount
        // - Choose num of hands
      // 1. Dealt: 
        // - Dealer & player have cards. 
        // - Player begins to act on hands.
      // 2. Over: Result screen and change bet & handcount.
    bet: 100,
    handCount: 1,
    userName: 'PrimeTimeTran',
    activeHand: {
      dealtCards: [],
      dealerCards: [],
      playerCards: [],
      remainingCards: [],
    },
    users: [
      {
        id: 1,
        username: 'PrimeTimeTran'
        playedHands: [
          {
            id: 1,
            bet: 100,
            mode: 'normal',
            outcome: ['win' 'lose', 'bust', 'push'],
            cards: [
              {
                value: 'A',
                suit: 'spades'
              },
              {
                value: 'A',
                suit: 'clubs'
              },
            ],
            dealerCards: [
              {
                value: 'K',
                suit: 'hearts'
              },
              {
                value: 'A',
                suit: 'diamonds'
              },
            ],
          }
        ]
      }
    ]
  }
}
```

# Goals




# Outcome




1. How to import and use SVG using [React Native SVG Transformer](https://github.com/kristerkari/react-native-svg-transformer)
2. 