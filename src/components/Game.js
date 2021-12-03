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
      <View style={styles.flexOne}>
        <Text>Dealer</Text>
        <ScrollView horizontal>
          {renderDeck()}
        </ScrollView>
      </View>
      <View style={styles.flexOne}>
        <Text style={styles.title}>Loi V Tran</Text>
        <Text style={styles.title}>Florida, USA</Text>
        <Text style={styles.title}>July, 22th, 1987</Text>
      </View>
      <View style={styles.flexOne}>
        <Text>Player</Text>
        <ScrollView horizontal>
          {renderDeck()}
        </ScrollView>
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    maxHeight: '100%',
    backgroundColor: 'lightblue',
  },
  flexOne: {
    flex: 1,
    margin: '10%'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
});
