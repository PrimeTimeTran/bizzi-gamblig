import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'

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
  const [ref, setRef] = useState(null);
  const [dataSource, setDataSource] = useState([]);
  const [scrollToIndex, setScrollToIndex] = useState(0);
  const [dataSourceCords, setDataSourceCords] = useState([]);

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
    if (hand.sum >= 21) return

    hand.cards.push(cards.pop())
    hand.sum = calculateSumOfCards(hand.cards)
    hand.fiveCardCharlie = hand.sum < 22 && hand.cards.length === 5
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
      texts.push(
        <View
          key={idx}
          style={styles.item}
          onLayout={(event) => {
            const layout = event.nativeEvent.layout;
            dataSourceCords[idx] = layout.y;
            setDataSourceCords(dataSourceCords);
          }}>
          <HandRow step={step} cards={handsDealt[idx] && handsDealt[idx].cards} player='Player' handNum={idx + 1} focused={handFocusedIdx === idx} />
        </View>

      )
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


  const scrollHandler = (idx) => {
    console.log(dataSourceCords.length, scrollToIndex);
    if (dataSourceCords.length > scrollToIndex) {
      ref.scrollTo({
        x: 0,
        y: dataSourceCords[scrollToIndex - 1],
        animated: true,
      });
    } else {
      console.log('Out of index');
      // alert('Out of Max Index');
    }
  };

  useEffect(scrollHandler, [handsDealt])

  const {
    step,
    handsDealt,
    handFocusedIdx,
  } = state

  return (
    <SafeAreaView style={styles.container}>
      <InfoPanel state={state} />
      <View style={{ flex: 0.8, borderBottomWidth: 1 }}>
        <ShimmerPlaceholder visible={handsDealt[handsDealt.length - 1].cards}>
          <HandRow step={step} cards={handsDealt[handsDealt.length - 1].cards} player='Dealer' show={handFocusedIdx === handsDealt.length - 1} />
        </ShimmerPlaceholder>
      </View>
      <ScrollView
        style={styles.flexOne}
        ref={(ref) => setRef(ref)}
      >
        {renderHands()}
      </ScrollView>
      <Composer stay={stay} step={step} state={state} setState={setState} startGame={startGame} hit={hit} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
  },
  flexOne: {
    flex: 1,
  },
})
