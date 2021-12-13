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
    handCount: 1,
    handsDealt: [],
    handFocusedIdx: 0,
    cardsRemaining: shuffledDeck,
    mode: ['normal', 'challenge', 'help'],
    player: {
      username: 'PrimeTimeTran',
      balance: 100000,
    }
  })

  const startGame = () => {
    const {
      handCount,
      cardsRemaining: cards
    } = state

    let hands = []
    let handsIdx = 0

    while (handsIdx <= handCount) {
      let initialHand = cards.splice(0, 2)
      hands.push(initialHand)
      handsIdx++
    }

    const cardsRemaining = cards.filter(Boolean)

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
    if (handFocusedIdx === handCount - 1) {
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
    const numOfHandsToDeal = state.handCount
    let idx = 0
    let texts = []
    while (numOfHandsToDeal > idx) {
      texts.push(<HandRow key={idx} step={state.step} cards={state.handsDealt[idx]} player='Player' handCount={idx + 1} focused={state.handFocusedIdx === idx} />)
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

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.7 }}>
        <HandRow step={state.step} cards={state.handsDealt[state.handsDealt.length - 1]} player='Dealer' />
      </View>
      <View style={{ borderWidth: 1, padding: '3%' }}>
        <Text>🃏 Deck</Text>
        <Text>💲 {state.bet * state.handCount}</Text>
        <Text> ♦️♣️❤♠️ {state.handCount}</Text>
      </View>
      <ScrollView style={styles.flexOne}>
        {renderHands()}
      </ScrollView>
      <Composer stay={stay} step={state.step} state={state} setState={setState} startGame={startGame} hit={hit} />
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
