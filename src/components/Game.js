import React, { useState, useEffect } from 'react'

import {
  Text,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native'

import Composer from './Composer'
import HandRow from './HandRow'

import { shuffledCards, calculateSumOfCards } from '../utils'

const shuffledDeck = shuffledCards()

export default function Game() {
  const [state, setState] = useState({
    step: 0,
    bet: 100,
    handCount: 2,
    handsDealt: [],
    handFocusedIdx: 0,
    cardsRemaining: shuffledDeck,
    mode: ['normal', 'challenge', 'help'],
    player: {
      balance: 100000,
      username: 'PrimeTimeTran',
    }
  })

  const startGame = () => {
    const {
      handCount,
      cardsRemaining: cards
    } = state

    let hands = []
    let handsIdx = 0

    while (handsIdx <= handCount - 1) {
      let initialHand = cards.splice(0, 2)
      hands.push(initialHand)
      handsIdx++
    }





    const cardsRemaining = cards.filter(Boolean)

    console.log({ cardsRemaining, handsDealt: hands })

    setState({
      ...state,
      step: 1,
      handsDealt: hands,
      cardsRemaining
    })
  }

  const hit = () => {
    const {
      handsDealt,
      handFocusedIdx,
      cardsRemaining: cards
    } = state
    const newHand = handsDealt[handFocusedIdx]

    if (newHand.length === 5) return

    newHand.push(cards.pop())
    const cardsRemaining = cards.filter(Boolean)
    handsDealt[handFocusedIdx] = newHand
    setState({
      ...state,
      handsDealt,
      cardsRemaining
    })
  }

  const stay = () => {
    const { handCount, handFocusedIdx } = state

    if (handFocusedIdx === handCount - 2) {
      setState({
        ...state,
        step: 2
      })
    } else if (handFocusedIdx < handCount) {
      setState({
        ...state,
        handFocusedIdx: handFocusedIdx + 1
      })
    }
  }

  const renderHands = () => {
    const { handCount } = state
    let idx = 0
    let texts = []
    let numOfUserHands = handCount - 1
    while (numOfUserHands > idx) {
      texts.push(<HandRow key={idx} step={state.step} cards={state.handsDealt[idx]} player='Player' handNum={idx + 1} focused={state.handFocusedIdx === idx} />)
      idx++
    }
    return texts
  }

  // Indicate to user which hand # their acions apply to
  useEffect(() => {
    renderHands()
  }, [state.handFocusedIdx])

  // Hit for dealer til at least 16
  useEffect(() => {
    if (state.step === 2) {
      const {
        handsDealt,
        handFocusedIdx,
        cardsRemaining: cards
      } = state
      const dealerHand = handsDealt[handFocusedIdx + 1]
      console.log({ handsDealt, dealerHand });
      dealerHand.push(cards.pop())
      while (calculateSumOfCards(dealerHand) <= 16) {
        dealerHand.push(cards.pop())
      }
      const cardsRemaining = cards.filter(Boolean)
      handsDealt[handFocusedIdx + 1] = dealerHand
      setState({
        ...state,
        handsDealt,
        cardsRemaining
      })
    }
  }, [state.step])


  const {
    bet,
    step,
    handsDealt,
    handCount
  } = state

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.7 }}>
        <HandRow step={step} cards={handsDealt[handsDealt.length - 1]} player='Dealer' />
      </View>
      <View style={{ borderWidth: 1, padding: '3%' }}>
        <Text>🃏 Deck</Text>
        <Text>💲 {bet * (handCount - 1)}</Text>
        <Text> ♦️♣️❤♠️ {handCount - 1}</Text>
      </View>
      <ScrollView style={styles.flexOne}>
        {renderHands()}
      </ScrollView>
      <Composer stay={stay} step={step} state={state} setState={setState} startGame={startGame} hit={hit} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop: '10%',
    flexDirection: 'column',
  },
  flexOne: {
    flex: 1,
  },
})
