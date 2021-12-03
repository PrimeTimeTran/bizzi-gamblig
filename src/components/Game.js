import React, { useState, useEffect } from 'react'

import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native';

import { shuffledCards } from '../utils';

export default function Game() {
  const [cards, setCards] = useState([])

  const renderDeck = () => {
    const cards = []

    for (const card of shuffledCards()) {
      cards.push(card.component)
    }
    return cards
  }

  useEffect(() => {
    console.log('Hello Game')
  }, [])

  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <Text>Dealer</Text>
        <View style={styles.rowContainer}>
          {renderDeck()}
        </View>
      </View>
      <View style={styles.flexOne}>
        <Text style={styles.title}>Loi V Tran</Text>
        <Text style={styles.title}>Florida, USA</Text>
        <Text style={styles.title}>July, 22th, 1987</Text>
      </View>
      <View style={styles.row}>
        <Text>Dealer</Text>
        <View style={styles.rowContainer}>
          {renderDeck()}
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
    flexDirection: 'column',
    backgroundColor: 'blue'
  },
  rowContainer: {
    flexDirection: 'row'
  },
});
