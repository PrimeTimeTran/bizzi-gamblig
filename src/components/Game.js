import React, { useState, useEffect } from 'react'

import {
  Text,
  View,
  Button,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import { shuffledCards, BACK, DECK, calculateSumOfCards } from '../utils'

const shuffledDeck = shuffledCards()

function HandRow ({ cards, player }) {
  const findCard = (v, s) => {
    return DECK.find(c => c.value === v && c.suit === s)
  }
  const renderCards = () => {
    const dealtCards = []
    // FIXME Real Game
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
  const text = player
  // const text = player === 'Dealer' ? "What could defeat the might of two kings who've combined their hearts and treasures" : "Dark aces which both lead and push the spades and clubs of the people"
  // const text = player === 'Dealer' ? "Điều gì có thể đánh bại sức mạnh của hai vị vua đã kết hợp trái tim và kho báu của họ" : "Những con át chủ bài vừa dẫn đầu vừa thúc đẩy quân xì bích và chuồng"

  return (
    <View style={styles.row}>
      {player === 'Dealer' && <View style={styles.rowContainer}>
        {renderCards()}
      </View>}
      <Text style={styles.rowTitle} />
      <Text style={styles.rowTitle}>{text}</Text>
      <Text style={styles.rowTitle}>{calculateSumOfCards(cards)}</Text>
      {player === 'Player' && <View style={styles.rowContainer}>
        {renderCards()}
      </View>}
    </View>
  )
}

function Composer (props) {
  const { hitme, step, setState, state } = props
  if (step === 0) {
    return (
      <View style={styles.flexOne}>
        <View style={styles.composorRow}>
          <View style={[{ backgroundColor: 'lightgrey' }, styles.composerButton]}><Text>{state.handCount}</Text></View>
          <TouchableOpacity onPress={() => setState({ ...state, handCount: state.handCount !== 1 ? state.handCount - 1 : 1 })} style={[{ backgroundColor: 'lightpink' }, styles.composerButton]}><Text>-</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => setState({ ...state, handCount: state.handCount + 1 })} style={[{ backgroundColor: 'lightgreen' }, styles.composerButton]}><Text>+</Text></TouchableOpacity>
        </View>
        <View style={styles.composorRow}>
          <View style={[{ backgroundColor: 'lightgrey' }, styles.composerButton]}><Text>{state.bet}</Text></View>
          <TouchableOpacity onPress={() => setState({ ...state, bet: state.bet !== 100 ? state.bet - 100 : 100 })} style={[{ backgroundColor: 'lightpink' }, styles.composerButton]}><Text>-</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => setState({ ...state, bet: state.bet + 100 })} style={[{ backgroundColor: 'lightgreen' }, styles.composerButton]}><Text>+</Text></TouchableOpacity>
        </View>
        <View style={styles.composorRow}>
          <TouchableOpacity onPress={() => setState({ ...state, step: state.step + 1 })} style={{ backgroundColor: 'lightgreen', flex: 1, margin: '1%', padding: '3%', justifyContent: 'center', alignItems: 'center' }}><Text>Deal</Text></TouchableOpacity>
        </View>
      </View>
    )
  }
  if (step === 1) {
    return (
      <View style={styles.flexOne}>
        <View style={styles.composorRow}>
          <View style={styles.key}>
            <Text>
              Hands:
            </Text>
          </View>
          <View style={styles.value}>
            <Text style={styles.textValue}>
              1 🃏
            </Text>
          </View>
        </View>
        <View style={styles.composorRow}>
          <View style={styles.key}>
            <Text>
              Bet:
            </Text>
          </View>
          <View style={styles.value}>
            <Text style={styles.textValue}>
              $100 💵
            </Text>
          </View>
        </View>
        <View style={styles.composorRow}>
          <View style={styles.key}>
            <Text>
              Location:
            </Text>
          </View>
          <View style={styles.value}>
            <Text style={styles.textValue}>
              Earth 🌏
            </Text>
          </View>
        </View>
        <View style={styles.composorRow}>
          <View style={styles.key}>
            <Text>
              Time:
            </Text>
          </View>
          <View style={styles.value}>
            <Text style={styles.textValue}>
              Fleeting 🕤
            </Text>
          </View>
        </View>
      </View>
    )
  }
  return (
    <View style={styles.flexOne}>
      <Text style={[styles.title, { marginBottom: 10 }]}>
        <Button title='Hit Me' onPress={hitme} style={styles.button} />
      </Text>
    </View>
  )
}

export default function Game () {
  const [state, setState] = useState({
    step: 0,
    bet: 100,
    handCount: 1,
    handsDealt: [],
    playerCards: [],
    dealerCards: [],
    cardsRemaining: shuffledDeck
  })

  useEffect(() => {
    const startGame = () => {
      const cards = state.cardsRemaining
      const dealtCards = []
      // TODO: For each hand deal cards
      // let playerHandIdx = 0
      // let cardsCopy = [...cards]
      // let dealtCardsNew = []
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

      const dealerCards = cards.splice(0, 2)

      for (const card of dealerCards) {
        dealtCards.push(card)
        dealtCards.push(card.component)
      }

      const playerCards = cards.splice(0, 2)

      for (const card of playerCards) {
        dealtCards.push(card)
        dealtCards.push(card.component)
      }

      const cardsRemaining = cards.filter(Boolean)

      console.log({ cardsRemaining })

      setState({
        ...state,
        playerCards,
        dealerCards,
        cardsRemaining
      })
    }
    startGame()
  }, [])

  console.log({ state })

  return (
    <ScrollView style={styles.container}>
      <HandRow step={state.step} cards={state.dealerCards} player='Dealer' />
      <Composer step={state.step} state={state} setState={setState} />
      {/* <View style={styles.value}>
        <Text style={{ textAlign: 'center' }}>
          💯🙏🤔🙌🏻🤡🥋👨🏻‍🎓🙇🏻‍♂️🧑🏻‍💻 👨🏻‍🏫 🧙🏻‍♂️ 🐒🦁🔫 ☮️ 📈 💂🏻‍♀️👨🏻‍🍳 ✍️⛵️🎢🗽
        </Text>
      </View> */}
      <HandRow step={state.step} cards={state.playerCards} player='Player' />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '20%',
    maxHeight: '100%',
    flexDirection: 'column'
  },
  flexOne: {
    flex: 1,
    margin: '5%',
    padding: '2%',
    borderWidth: 1
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
    borderColor: 'black',
    borderWidth: 1
  },
  rowTitle: {
    fontSize: 20,
    textAlign: 'center',
    alignSelf: 'center'
  },
  rowContainer: {
    flexDirection: 'row'
  },
  button: {
    borderWidth: 1,
    borderColor: 'black'
  },
  composorRow: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  key: {
    flex: 1
  },
  value: {
    flex: 1,
    alignItems: 'flex-end'
  },
  textValue: {
    color: 'blue'
  },
  composerButton: {
    flex: 1, margin: '1%', padding: '3%', justifyContent: 'center', alignItems: 'center'
  }
})
