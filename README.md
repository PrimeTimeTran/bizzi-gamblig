# Description

React Native BlackJack game

## Rules

1. Seat 1 gets first card
2. No splitting
3. No double down

## TODO

- If dealer gets 21 auto win.
  - Popup modal which prompts uers
- If user gets 21 auto win.
  - Golden border?
- If both user & dealer gets 21 push.
- If user gets 21 automatically skip that hand play.
  - Disable hit.
- 5 cards under 21 should be auto win if other user isn't holding a natural.

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
    bet: 100,
    handCount: 1,
    userName: 'PrimeTimeTran',
    activeHand: {
      step: 0,
      bet: 100,
      handCount: 2,
      mode: 'normal',
      handFocusedIdx: 0,
      handsDealt: [{}, {}],
      cardsRemaining: [{}, {}],
    },
    users: [
      {
        id: 1,
        language: 'en',
        username: 'PrimeTimeTran',
        rounds: [
          {
            bet: 100,
            handCount: 2, 
            mode: 'normal',
            cardsRemaining: [{}, {}],
            handsDealt: [
              {
                cards: [{}, {}],
                sum: 21
                outcome: 'win'
              }
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
