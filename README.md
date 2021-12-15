# Description

React Native BlackJack game

## Rules

1. Seat 1 gets first card
2. No splitting
3. No double down

## TODO

- If dealer gets 21 Auto win
- If user gets 21 Auto win
- If both user & dealer gets 21 push
- If user gets 21 automatically skip that hand play

## Steps

0. Choose hand count, bet amount.
1. Work through hands 1 by 1 until it's the dealers turn.
2. Show results of round to user.
3. Wait for user to choose to begin another round.

## App State

```js
{
  appState: {
    step: 0,
      // 2. Over: Result screen and change bet & hand count.
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
        language: 'en',
        username: 'PrimeTimeTran',
        rounds: [
          {
            handCount: 2,
            handsDealt: [
              {
                bet: 100,
                cards: [
                  {
                    value: 'A',
                    suit: 'spades',
                  },
                  {
                    value: 'A',
                    suit: 'clubs',
                  },
                ],
                handOutcome: ['win'],
              },
              {
                bet: null,
                cards: [
                  {
                    value: 'K',
                    suit: 'hearts',
                  },
                  {
                    value: 'K',
                    suit: 'diamonds',
                  },
                ],
                handOutcome: ['lose'],
              },
            ]
          },
        ]
      }
    ]
  }
}
```

## Modes

### Normal

### Premium

## Goals

## Outcome

- Define component
- Pass props
- Consume props
- Use [React Native SVG Transformer](https://github.com/kristerkari/react-native-svg-transformer)
