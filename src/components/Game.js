import React, { useState, useEffect } from 'react'

import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native';

import KingOfHearts from '../../assets/cards/K-hearts.svg'
import KingOfDiamonds from '../../assets/cards/K-diamonds.svg'
import AceOfClubs from '../../assets/cards/A-clubs.svg'
import AceOfSpades from '../../assets/cards/A-spades.svg'


import { getDeck, DECK } from '../utils';


// console.log({ go: DECK, getDeck: getDeck() });

export default function Game() {
  const [cards, setCards] = useState([])

  const renderNumbers = () => {
    const cards = []

    for (const card of DECK) {
      cards.push(card.component)
    }
    return cards
  }


  useEffect(() => {
    console.log('Hello Game')
  }, [])
  return (
    <View style={styles.handContainer}>
      <View>
        <ScrollView style={styles.spades}>
          {renderNumbers()}
        </ScrollView>
      </View>
      <View>
        <Text style={styles.title}>Loi Van Tran</Text>
        <Text style={styles.title}>Florida, USA</Text>
        <Text style={styles.title}>July, 22th, 1987</Text>
        <View style={styles.row}>
          <KingOfHearts width={200} height={300} />
          <KingOfDiamonds width={200} height={300} />
        </View>
        <View style={styles.row}>
          <AceOfSpades width={200} height={300} />
          <AceOfClubs width={200} height={300} />
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  handContainer: {
    flex: 1,
    padding: 100,
    flexDirection: 'column',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center'
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  spades: {
    flex: 1,
    width: 200
  }
});
