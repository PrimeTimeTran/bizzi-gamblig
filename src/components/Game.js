import React, { useState, useEffect } from 'react'

import {
  Text,
  View,
  Button,
  ScrollView,
  StyleSheet
} from 'react-native';

import { shuffledCards, BACK, DECK, calculateSumOfCards } from '../utils';

const shuffledDeck = shuffledCards()
function Card() {
  return (
    <View><Text>111</Text></View>
  )
}
function HandRow({ cards, player }) {
  const findCard = (v, s) => {
    return DECK.find(c => c.value === v && c.suit === s)
  }
  const renderCards = () => {
    const dealtCards = []
    for (const [i, v] of cards.entries()) {
      if (player === 'Player') {
        if (i === 0) {
          dealtCards.push(<View>{v.component}</View>)
        } else {
          dealtCards.push(<View>{v.component}</View>)
        }
      } else {
        if (i === 0) {
          dealtCards.push(<View>{v.component}</View>)
        } else {
          dealtCards.push(<View>{v.component}</View>)
        }
      }
    }

    // FIXME When we wanna show the results to the newbs
    // for (const [i, v] of cards.entries()) {
    //   if (player === 'Player') {
    //     if (i === 0) {
    //       dealtCards.push(<View>{findCard('A', 'spades').component}</View>)
    //     } else {
    //       dealtCards.push(<View>{findCard('A', 'clubs').component}</View>)
    //     }
    //   } else {
    //     if (i === 0) {
    //       dealtCards.push(<View>{findCard('K', 'hearts').component}</View>)
    //     } else {
    //       dealtCards.push(<View>{findCard('K', 'diamonds').component}</View>)
    //     }
    //   }
    // }
    return dealtCards
  }
  const text = player === 'Player' ? "Những con át chủ bài vừa dẫn đầu vừa đẩy quân và câu lạc bộ của mọi người" : "Hai vị vua với tấm lòng thống nhất và giàu có"
  return (
    <View style={styles.row}>
      {player === 'Dealer' && <View style={styles.rowContainer}>
        {renderCards()}
      </View>}
      <Text style={styles.rowTitle}></Text>
      <Text style={styles.rowTitle}>{text}</Text>
      <Text style={styles.rowTitle}></Text>
      {player === 'Player' && <View style={styles.rowContainer}>
        {renderCards()}
      </View>}
    </View>
  )

}
function Composer(props) {
  const { hitme } = props
  return (
    <View style={styles.flexOne}>
      <Text style={[styles.title, { marginBottom: 10 }]}>
        <Button title="Hit Me" onPress={hitme} style={styles.button} />
      </Text>
    </View>
  )
}

export default function Game() {
  const [state, setState] = useState({
    step: 0,
    handCount: 2,
    handsDealt: [],
    playerCards: [],
    dealerCards: [],
    cardsRemaining: shuffledDeck,
  })

  useEffect(() => {

    const startGame = () => {
      const cards = state.cardsRemaining
      const dealtCards = []

      let playerHandIdx = 0
      let cardsCopy = [...cards]
      let dealtCardsNew = []

      // TODO: For each hand deal cards
      // while (playerHandIdx < state.handCount) {
      //   let kards = cardsCopy.splice(0, 2)
      //   for (let kard of kards) {
      //     console.log({ kard });
      //     kards.push(kard)
      //     kards.push(kard.component)
      //   }
      //   dealtCardsNew.push(kards)
      //   console.log({ playerHandIdx });
      //   playerHandIdx++
      // }

      // console.log({ cardsCopy, dealtCardsNew });

      let dealerCards = cards.splice(0, 2)

      for (const card of dealerCards) {
        dealtCards.push(card)
        dealtCards.push(card.component)
      }

      const playerCards = cards.splice(0, 2)

      for (const card of playerCards) {
        dealtCards.push(card)
        dealtCards.push(card.component)
      }

      const cardsRemaining = cards.filter(Boolean);

      console.log({ cardsRemaining })

      setState({
        playerCards,
        dealerCards,
        cardsRemaining,
      })
    }
    startGame()
  }, [])

  console.log({ state })

  return (
    <ScrollView style={styles.container}>
      <Card />
      <HandRow step={state.step} cards={state.dealerCards} player="Dealer" />
      <Composer step={state.step} />
      <HandRow step={state.step} cards={state.playerCards} player="Player" />
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '20%',
    maxHeight: '100%',
    flexDirection: 'column',
  },
  flexOne: {
    flex: 1,
    margin: '5%',
    padding: '2%',
    borderWidth: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  row: {
    height: '40%',
    maxWidth: '100%',
    flexDirection: 'column',
  },
  rowTitle: {
    fontSize: 20,
    textAlign: 'center',
    alignSelf: 'center'
  },
  rowContainer: {
    flexDirection: 'row',
  },
  button: {
    borderWidth: 1,
    borderColor: 'black'
  }
});
