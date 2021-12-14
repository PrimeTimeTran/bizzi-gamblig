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
      handsDealt,
      cardsRemaining: cards
    } = state

    let handIdx = 0

    while (handIdx < handCount) {
      handsDealt[handIdx] = []
      handsDealt[handIdx].push(cards.pop())
      handIdx++
    }

    handIdx = 0
    while (handIdx < handCount) {
      handsDealt[handIdx].push(cards.pop())
      handIdx++
    }

    const cardsRemaining = cards.filter(Boolean)

    setState({
      ...state,
      step: 1,
      handsDealt,
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
    const { handCount, handFocusedIdx, handsDealt } = state
    const focusNextHand = handFocusedIdx !== handCount
    const nextIdx = handFocusedIdx + 1
    const dealerTurn = nextIdx === handsDealt.length - 1
    if (focusNextHand) {
      setState({
        ...state,
        handFocusedIdx: nextIdx
      })
    }
    if (dealerTurn) {
      setState({
        ...state,
        step: 2
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

  // Indicate to user which hand # their actions apply to
  useEffect(() => {
    renderHands()
  }, [state.handFocusedIdx])

  const {
    bet,
    step,
    handCount,
    handsDealt,
    handFocusedIdx,
  } = state

  // console.log({
  //   state,
  //   player: handsDealt[0],
  //   dealer: handsDealt[1],

  // })

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.7 }}>
        <HandRow step={step} cards={handsDealt[handsDealt.length - 1]} player='Dealer' show={handFocusedIdx === handsDealt.length - 1} />
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
