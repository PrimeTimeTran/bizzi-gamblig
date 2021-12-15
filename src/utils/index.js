import React from 'react'
import { View, Dimensions } from 'react-native'

import C10 from '../../assets/cards/10-clubs.svg'
import D10 from '../../assets/cards/10-diamonds.svg'
import H10 from '../../assets/cards/10-hearts.svg'
import S10 from '../../assets/cards/10-spades.svg'
import C2 from '../../assets/cards/2-clubs.svg'
import D2 from '../../assets/cards/2-diamonds.svg'
import H2 from '../../assets/cards/2-hearts.svg'
import S2 from '../../assets/cards/2-spades.svg'
import C3 from '../../assets/cards/3-clubs.svg'
import D3 from '../../assets/cards/3-diamonds.svg'
import H3 from '../../assets/cards/3-hearts.svg'
import S3 from '../../assets/cards/3-spades.svg'
import C4 from '../../assets/cards/4-clubs.svg'
import D4 from '../../assets/cards/4-diamonds.svg'
import H4 from '../../assets/cards/4-hearts.svg'
import S4 from '../../assets/cards/4-spades.svg'
import C5 from '../../assets/cards/5-clubs.svg'
import D5 from '../../assets/cards/5-diamonds.svg'
import H5 from '../../assets/cards/5-hearts.svg'
import S5 from '../../assets/cards/5-spades.svg'
import C6 from '../../assets/cards/6-clubs.svg'
import D6 from '../../assets/cards/6-diamonds.svg'
import H6 from '../../assets/cards/6-hearts.svg'
import S6 from '../../assets/cards/6-spades.svg'
import C7 from '../../assets/cards/7-clubs.svg'
import D7 from '../../assets/cards/7-diamonds.svg'
import H7 from '../../assets/cards/7-hearts.svg'
import S7 from '../../assets/cards/7-spades.svg'
import C8 from '../../assets/cards/8-clubs.svg'
import D8 from '../../assets/cards/8-diamonds.svg'
import H8 from '../../assets/cards/8-hearts.svg'
import S8 from '../../assets/cards/8-spades.svg'
import C9 from '../../assets/cards/9-clubs.svg'
import D9 from '../../assets/cards/9-diamonds.svg'
import H9 from '../../assets/cards/9-hearts.svg'
import S9 from '../../assets/cards/9-spades.svg'
import AC from '../../assets/cards/A-clubs.svg'
import AD from '../../assets/cards/A-diamonds.svg'
import AH from '../../assets/cards/A-hearts.svg'
import AS from '../../assets/cards/A-spades.svg'
import JC from '../../assets/cards/J-clubs.svg'
import JD from '../../assets/cards/J-diamonds.svg'
import JH from '../../assets/cards/J-hearts.svg'
import JS from '../../assets/cards/J-spades.svg'
import KC from '../../assets/cards/K-clubs.svg'
import KD from '../../assets/cards/K-diamonds.svg'
import KH from '../../assets/cards/K-hearts.svg'
import KS from '../../assets/cards/K-spades.svg'
import QC from '../../assets/cards/Q-clubs.svg'
import QD from '../../assets/cards/Q-diamonds.svg'
import QH from '../../assets/cards/Q-hearts.svg'
import QS from '../../assets/cards/Q-spades.svg'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const cardWidth = (windowWidth * 0.35) / 2
const cardHeight = (windowHeight * 0.25) / 2

const BACK = <View style={{ width: cardWidth, height: cardHeight, borderWidth: 1 }}></View>
const PLACEHOLDER = <View style={{ width: cardWidth, height: cardHeight }}></View>

const DECK = [
  { value: 'A', suit: 'hearts', component: <View style={{ width: cardWidth, height: cardHeight }}><AH width={cardWidth} height={cardHeight} /></View> },
  { value: 'K', suit: 'hearts', component: <KH width={cardWidth} height={cardHeight} /> },
  { value: 'Q', suit: 'hearts', component: <QH width={cardWidth} height={cardHeight} /> },
  { value: 'J', suit: 'hearts', component: <JH width={cardWidth} height={cardHeight} /> },
  { value: '10', suit: 'hearts', component: <H10 width={cardWidth} height={cardHeight} /> },
  { value: '9', suit: 'hearts', component: <H9 width={cardWidth} height={cardHeight} /> },
  { value: '8', suit: 'hearts', component: <H8 width={cardWidth} height={cardHeight} /> },
  { value: '7', suit: 'hearts', component: <H7 width={cardWidth} height={cardHeight} /> },
  { value: '6', suit: 'hearts', component: <H6 width={cardWidth} height={cardHeight} /> },
  { value: '5', suit: 'hearts', component: <H5 width={cardWidth} height={cardHeight} /> },
  { value: '4', suit: 'hearts', component: <H4 width={cardWidth} height={cardHeight} /> },
  { value: '3', suit: 'hearts', component: <H3 width={cardWidth} height={cardHeight} /> },
  { value: '2', suit: 'hearts', component: <H2 width={cardWidth} height={cardHeight} /> },

  { value: 'A', suit: 'diamonds', component: <AD width={cardWidth} height={cardHeight} /> },
  { value: 'K', suit: 'diamonds', component: <KD width={cardWidth} height={cardHeight} /> },
  { value: 'Q', suit: 'diamonds', component: <QD width={cardWidth} height={cardHeight} /> },
  { value: 'J', suit: 'diamonds', component: <JD width={cardWidth} height={cardHeight} /> },
  { value: '10', suit: 'diamonds', component: <D10 width={cardWidth} height={cardHeight} /> },
  { value: '9', suit: 'diamonds', component: <D9 width={cardWidth} height={cardHeight} /> },
  { value: '8', suit: 'diamonds', component: <D8 width={cardWidth} height={cardHeight} /> },
  { value: '7', suit: 'diamonds', component: <D7 width={cardWidth} height={cardHeight} /> },
  { value: '6', suit: 'diamonds', component: <D6 width={cardWidth} height={cardHeight} /> },
  { value: '5', suit: 'diamonds', component: <D5 width={cardWidth} height={cardHeight} /> },
  { value: '4', suit: 'diamonds', component: <D4 width={cardWidth} height={cardHeight} /> },
  { value: '3', suit: 'diamonds', component: <D3 width={cardWidth} height={cardHeight} /> },
  { value: '2', suit: 'diamonds', component: <D2 width={cardWidth} height={cardHeight} /> },

  { value: 'A', suit: 'clubs', component: <AC width={cardWidth} height={cardHeight} /> },
  { value: 'K', suit: 'clubs', component: <KC width={cardWidth} height={cardHeight} /> },
  { value: 'Q', suit: 'clubs', component: <QC width={cardWidth} height={cardHeight} /> },
  { value: 'J', suit: 'clubs', component: <JC width={cardWidth} height={cardHeight} /> },
  { value: '10', suit: 'clubs', component: <C10 width={cardWidth} height={cardHeight} /> },
  { value: '9', suit: 'clubs', component: <C9 width={cardWidth} height={cardHeight} /> },
  { value: '8', suit: 'clubs', component: <C8 width={cardWidth} height={cardHeight} /> },
  { value: '7', suit: 'clubs', component: <C7 width={cardWidth} height={cardHeight} /> },
  { value: '6', suit: 'clubs', component: <C6 width={cardWidth} height={cardHeight} /> },
  { value: '5', suit: 'clubs', component: <C5 width={cardWidth} height={cardHeight} /> },
  { value: '4', suit: 'clubs', component: <C4 width={cardWidth} height={cardHeight} /> },
  { value: '3', suit: 'clubs', component: <C3 width={cardWidth} height={cardHeight} /> },
  { value: '2', suit: 'clubs', component: <C2 width={cardWidth} height={cardHeight} /> },

  // { value: "A", suit: "spades", component: <AS width={cardWidth} height={cardHeight} /> },
  { value: 'A', suit: 'spades', component: <AS width={cardWidth} height={cardHeight} /> },
  { value: 'K', suit: 'spades', component: <KS width={cardWidth} height={cardHeight} /> },
  { value: 'Q', suit: 'spades', component: <QS width={cardWidth} height={cardHeight} /> },
  { value: 'J', suit: 'spades', component: <JS width={cardWidth} height={cardHeight} /> },
  { value: '10', suit: 'spades', component: <S10 width={cardWidth} height={cardHeight} /> },
  { value: '9', suit: 'spades', component: <S9 width={cardWidth} height={cardHeight} /> },
  { value: '8', suit: 'spades', component: <S8 width={cardWidth} height={cardHeight} /> },
  { value: '7', suit: 'spades', component: <S7 width={cardWidth} height={cardHeight} /> },
  { value: '6', suit: 'spades', component: <S6 width={cardWidth} height={cardHeight} /> },
  { value: '5', suit: 'spades', component: <S5 width={cardWidth} height={cardHeight} /> },
  { value: '4', suit: 'spades', component: <S4 width={cardWidth} height={cardHeight} /> },
  { value: '3', suit: 'spades', component: <S3 width={cardWidth} height={cardHeight} /> },
  { value: '2', suit: 'spades', component: <S2 width={cardWidth} height={cardHeight} /> }
]

const suits = ['spades', 'diamonds', 'clubs', 'hearts']

const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

function getDeck () {
  const deck = new Array()
  for (let idxSuit = 0; idxSuit < suits.length; idxSuit++) {
    for (let idxValue = 0; idxValue < values.length; idxValue++) {
      const name = `${values[idxValue]}-${suits[idxSuit]}.svg`
      const card = {
        file: 1,
        value: values[idxValue],
        suit: suits[idxSuit],
        component: AS
      }
      deck.push(card)
    }
  }
  return deck
}

// https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-70.php
const countOccurrences = (arr, val) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0)

function calculateSumOfCards (cards) {
  let total = 0
  if (!cards) return
  const values = cards.map((c) => {
    switch (c.value) {
      case 'A':
        return 'A'
      case '9':
        return 9
      case '8':
        return 8
      case '7':
        return 7
      case '6':
        return 6
      case '5':
        return 5
      case '4':
        return 4
      case '3':
        return 3
      case '2':
        return 2
      default:
        return 10
    }
  })

  for (const value of values) {
    if (value !== 'A') total += value
  }

  let count = countOccurrences(values, 'A')

  while (count > 0) {
    if (total + 11 <= 21) {
      total += 11
    } else if (total + 10 <= 21) {
      total += 10
    } else if (total + 1 <= 21) {
      total += 1
    } else {
      total += 1
    }
    count -= 1
  }

  return total
}

function shuffledCards() {
  const deck = DECK
  for (let i = 0; i < 100; i++) {
    const location1 = Math.floor(Math.random() * 52)
    const location2 = Math.floor(Math.random() * 52)
    const tmp = deck[location1]
    deck[location1] = deck[location2]
    deck[location2] = tmp
  }
  return deck
}


function dealHands(handCount) {
  let cards = shuffledCards()
  const handsDealt = []

  let handIdx = 0

  while (handIdx < handCount) {
    handsDealt[handIdx] ||= []
    handsDealt[handIdx].push(cards.pop())
    handIdx++
  }

  handIdx = 0
  while (handIdx < handCount) {
    handsDealt[handIdx].push(cards.pop())
    handIdx++
  }

  cardsRemaining = cards.filter(Boolean)

  return [handsDealt, cardsRemaining]
}

export {
  BACK,
  DECK,
  getDeck,
  dealHands,
  shuffledCards,
  calculateSumOfCards,
  PLACEHOLDER
}
