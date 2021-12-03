import React, { useState, useEffect } from 'react'

import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native';

import { shuffledCards, BACK, DECK } from '../utils';

const shuffledDeck = shuffledCards()

export default function Game() {
  const [state, setState] = useState({
    cards: shuffledDeck,
    playerCards: [],
    dealerCards: [],
  })

  const renderCards = () => {
    const cards = state.cards
    const dealtCards = []
    let idx = 0
    const dealerCards = cards.splice(0, 2)
    for (const card of dealerCards) {
      dealtCards.push(card.component)
    }
    const playerCards = cards.splice(0, 2)
    for (const card of playerCards) {
      dealtCards.push(card.component)
    }
    const cardsRemaining = state.cards.filter(Boolean);
    console.log({ dealerCards, playerCards, cardsRemaining })
    // setCards(cardsRemaining)
    return dealtCards
  }


  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <Text>Dealer</Text>
        <View style={styles.rowContainer}>
          {renderCards()}
        </View>
      </View>
      <View style={styles.flexOne}>
        <Text style={styles.title}>Loi V Tran</Text>
        <Text style={styles.title}>Florida, USA</Text>
        <Text style={styles.title}>July, 22th, 1987</Text>
      </View>
      <View style={styles.row}>
        <Text>Player</Text>
        <View style={styles.rowContainer}>
          {renderCards()}
        </View>
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '15%',
    maxHeight: '100%',
    backgroundColor: 'pink',
    flexDirection: 'column',
  },
  flexOne: {
    flex: 1,
    margin: '5%',
    padding: '2%',
    borderWidth: 2,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  row: {
    height: '40%',
    maxWidth: '100%',
    padding: '5%',
    flexDirection: 'column',
    backgroundColor: 'blue'
  },
  rowContainer: {
    flexDirection: 'row'
  },
});
