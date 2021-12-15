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

function InfoPanel(props) {
  const { bet, handCount } = props.state
  return (
    <View style={{ borderBottomWidth: 1, padding: '2%', backgroundColor: 'lightgreen' }}>
      <Text>🃏 Deck</Text>
      <Text>💲 {bet * (handCount - 1)}</Text>
      <Text> ♦️♣️❤♠️ {handCount - 1}</Text>
    </View>
  )
}

export default function Game() {
  const [state, setState] = useState({
    step: 0,
    bet: 100,
    handCount: 6,
    handsDealt: [],
    handFocusedIdx: 0,
    cardsRemaining: shuffledDeck,
    mode: ['normal', 'premium'],
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

    // const go = dealHands(handCount)
    // console.log({ go });

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
    const hand = handsDealt[handFocusedIdx]
    if (hand.length === 5) return

    if (calculateSumOfCards(hand) === 21) return

    hand.push(cards.pop())
    const cardsRemaining = cards.filter(Boolean)
    handsDealt[handFocusedIdx] = hand
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

    if (focusNextHand) {
      setState({
        ...state,
        handFocusedIdx: nextIdx
      })
    }

    const dealerTurn = nextIdx === handsDealt.length - 1

    if (dealerTurn) {
      setState({
        ...state,
        step: 2
      })
    }
  }

  const renderHands = () => {
    const { handCount, handFocusedIdx, step, handsDealt } = state
    let idx = 0
    let texts = []
    let numOfUserHands = handCount - 1
    while (numOfUserHands > idx) {
      texts.push(<HandRow key={idx} step={step} cards={handsDealt[idx]} player='Player' handNum={idx + 1} focused={handFocusedIdx === idx} />)
      idx++
    }
    return texts
  }

  // Indicate to user which hand # their actions apply to
  useEffect(() => {
    renderHands()
  }, [state.handFocusedIdx])

  useEffect(() => {
    function hitForDealerIfCorrectStep() {
      if (state.step === 2) {
        const {
          handsDealt,
          handFocusedIdx,
          cardsRemaining: cards
        } = state
        const dealerIdx = handFocusedIdx + 1
        const dealerHand = handsDealt[dealerIdx]
        while (dealerHand.length < 5 && calculateSumOfCards(dealerHand) <= 16) {
          dealerHand.push(cards.pop())
        }
        const cardsRemaining = cards.filter(Boolean)
        handsDealt[dealerIdx] = dealerHand
        setState({
          ...state,
          handsDealt,
          cardsRemaining
        })
      }
    }
    hitForDealerIfCorrectStep()
  }, [state.step])

  const {
    step,
    handsDealt,
    handFocusedIdx,
  } = state

  return (
    <View style={styles.container}>
      <InfoPanel state={state} />
      <View style={{ flex: 0.7 }}>
        <HandRow step={step} cards={handsDealt[handsDealt.length - 1]} player='Dealer' show={handFocusedIdx === handsDealt.length - 1} />
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
