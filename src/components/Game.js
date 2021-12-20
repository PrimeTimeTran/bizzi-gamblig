import React, { useState, useEffect } from 'react'

import {
  Text,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import { LinearGradient } from 'expo-linear-gradient';



import Composer from './Composer'
import HandRow from './HandRow'

import { dealHands, calculateSumOfCards } from '../utils'

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

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

export default function Game(props) {
  const [state, setState] = useState({
    step: 0,
    bet: 100,
    handCount: 6,
    handFocusedIdx: 0,
    cardsRemaining: [],
    dealerNatural: false,
    mode: ['normal', 'help', 'statistics', 'premium'],
    player: {
      balance: 100000,
      username: props.player && props.player.username || 'Player',
    },
    handsDealt: [
      {
        cards: [],
      },
      {
        cards: [],
      },
    ],
  })

  const startGame = () => {
    const {
      handCount,
    } = state

    const [handsDealt, cardsRemaining, dealerNatural] = dealHands(handCount)
    setState({
      ...state,
      step: 1,
      handsDealt,
      dealerNatural,
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
    if (hand.cards.length === 5) return
    if (hand.sum === 21) return

    hand.cards.push(cards.pop())
    hand.sum = calculateSumOfCards(hand.cards)
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
      texts.push(<HandRow key={idx} step={step} cards={handsDealt[idx] && handsDealt[idx].cards} player='Player' handNum={idx + 1} focused={handFocusedIdx === idx} />)
      idx++
    }
    return texts
  }

  // Indicate to user which hand # their actions apply to
  useEffect(renderHands, [state.handFocusedIdx])

  useEffect(() => {
    function takeDealerActionWhenNeeded() {
      if (state.step === 2) {
        const {
          handsDealt,
          handFocusedIdx,
          cardsRemaining: cards
        } = state
        const dealerIdx = handFocusedIdx + 1
        const dealerHand = handsDealt[dealerIdx]
        while (dealerHand.cards.length < 5 && dealerHand.sum < 16) {
          dealerHand.cards.push(cards.pop())
          dealerHand.sum = calculateSumOfCards(dealerHand.cards)
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
    takeDealerActionWhenNeeded()
  }, [state.step])

  const {
    step,
    handsDealt,
    handFocusedIdx,
  } = state

  return (
    <View style={styles.container}>
      <InfoPanel state={state} />
      <View style={{ flex: 0.8, borderBottomWidth: 1 }}>
        <ShimmerPlaceholder visible={handsDealt[handsDealt.length - 1].cards}>
          <HandRow step={step} cards={handsDealt[handsDealt.length - 1].cards} player='Dealer' show={handFocusedIdx === handsDealt.length - 1} />
        </ShimmerPlaceholder>
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
