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
    bet: 100,
    handCount: 1,
    userName: 'PrimeTimeTran',
    activeHand: {
      // 0. Pregame:
        // - Choose bet amount
        // - Choose num of hands
      // 1. Dealt: 
        // - Dealer & player have cards. 
        // - Player begins to act on hands.
      // 2. Over: Result screen and change bet & handcount.
      status: 0,
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
            outcome: 'win',
            bet: 1_000_000,
            playerCards: [
              {
                value: 'A',
                suit: 'hearts'
              }
            ],
            dealerCards: [
              {
                
              }
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