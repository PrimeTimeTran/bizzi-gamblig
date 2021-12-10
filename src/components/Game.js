import React, { useState, useEffect } from 'react'

import {
  Text,
  View,
  Button,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from 'react-native'


import { shuffledCards, PLACEHOLDER, BACK, DECK, calculateSumOfCards } from '../utils'

const shuffledDeck = shuffledCards()

function HandRow({ cards, player, handCount, step }) {
  const findCard = (v, s) => {
    return DECK.find(c => c.value === v && c.suit === s)
  }
  const renderCard = (c) => {
    return (
      <View>
        {c}
      </View>
    )
  }


  const renderCards = () => {
    if (step === 0) return PLACEHOLDER
    const dealtCards = []
    // FIXME Real Game
    for (const [i, v] of cards.entries()) {
      if (player === 'Player') {
        if (i === 0) {
          dealtCards.push(renderCard(v.component))
        } else {
          dealtCards.push(renderCard(v.component))
        }
      } else {
        if (i === 0) {
          dealtCards.push(renderCard(v.component))
        } else {
          dealtCards.push(renderCard(v.component))
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
  const text = player === 'Player' ? 'Hand: ' + handCount : 'Dealer'
  // const text = player === 'Dealer' ? "What could defeat the might of two kings who've combined their hearts and treasures" : "Dark aces which both lead and push the spades and clubs of the people"
  // const text = player === 'Dealer' ? "Điều gì có thể đánh bại sức mạnh của hai vị vua đã kết hợp trái tim và kho báu của họ" : "Những con át chủ bài vừa dẫn đầu vừa thúc đẩy quân xì bích và chuồng"

  const isDealer = player === 'Dealer'

  return (
    <View style={styles.row}>
      {player === 'Dealer' && <ScrollView horizontal style={styles.rowContainer}>
        {renderCards()}
        {PLACEHOLDER}
      </ScrollView>}
      <Text style={styles.rowTitle} />
      <Text style={[styles.rowTitle, { alignSelf: isDealer ? 'flex-start' : 'flex-end' }]}>{text}</Text>
      <Text style={[styles.rowTitle, { alignSelf: isDealer ? 'flex-start' : 'flex-end' }]}>{calculateSumOfCards(cards)}</Text>
      {player === 'Player' && <ScrollView horizontal style={styles.rowContainer}>
        {renderCards()}
      </ScrollView>}
    </View>
  )
}

function Composer(props) {
  const { hitme, step, setState, state } = props
  if (step === 0) {
    return (
      <View style={styles.flexOne}>
        <View style={styles.composorRow}>
          <View style={[{ backgroundColor: 'lightgrey' }, styles.composerButton]}><Text>{state.handCount}</Text></View>
          <TouchableOpacity onPress={() => setState({ ...state, handCount: state.handCount !== 1 ? state.handCount - 1 : 1 })} style={[{ backgroundColor: 'lightpink' }, styles.composerButton]}><Text>-</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => setState({ ...state, handCount: state.handCount < 5 ? state.handCount + 1 : 5 })} style={[{ backgroundColor: 'lightgreen' }, styles.composerButton]}><Text>+</Text></TouchableOpacity>
        </View>
        <View style={styles.composorRow}>
          <View style={[{ backgroundColor: 'lightgrey' }, styles.composerButton]}><Text>${state.bet}</Text></View>
          <TouchableOpacity onPress={() => setState({ ...state, bet: state.bet !== 100 ? state.bet - 100 : 100 })} style={[{ backgroundColor: 'lightpink' }, styles.composerButton]}><Text>-</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => setState({ ...state, bet: state.bet + 100 })} style={[{ backgroundColor: 'lightgreen' }, styles.composerButton]}><Text>+</Text></TouchableOpacity>
        </View>
        <View style={styles.composorRow}>
          <TouchableOpacity onPress={props.startGame} style={{ backgroundColor: 'lightgreen', flex: 1, margin: '1%', padding: '3%', justifyContent: 'center', alignItems: 'center' }}><Text>Deal</Text></TouchableOpacity>
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
              {state.handCount} 🃏
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
              ${state.bet} 💵
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

export default function Game() {
  const [state, setState] = useState({
    step: 0,
    mode: ['normal', 'challenge', 'help'],
    bet: 100,
    handCount: 1,
    handsDealt: [],
    playerCards: [],
    dealerCards: [],
    cardsRemaining: shuffledDeck
  })
  const startGame = () => {
    const {
      handCount,
      cardsRemaining: cards
    } = state
    const dealtCards = []
    console.log({ foo: 'bar', cards, handCount })
    // TODO: For each hand deal cards
    let handsIdx = 0
    let cardsCopy = [...cards]
    let hands = []
    while (handsIdx <= state.handCount) {
      let kards = cardsCopy.splice(0, 2)
      for (let kard of kards) {
        console.log({ kard });
        // kards.push(kard)
        // kards.push(kard.component)
      }
      hands.push(kards)
      console.log({ handsIdx });
      handsIdx++
    }

    console.log({ cardsCopy, hands });

    const dealerCards = cards.splice(0, 5)

    for (const card of dealerCards) {
      dealtCards.push(card)
      dealtCards.push(card.component)
    }

    const playerCards = cards.splice(0, 5)

    for (const card of playerCards) {
      dealtCards.push(card)
      dealtCards.push(card.component)
    }

    const cardsRemaining = cards.filter(Boolean)
    console.log({ cardsRemaining, cards })

    setState({
      ...state,
      step: 1,
      playerCards,
      dealerCards,
      handsDealt: hands,
      cardsRemaining
    })
  }

  useEffect(() => {
  }, [])

  const renderHands = () => {
    const numOfHandsToDeal = state.handCount
    let idx = 0
    let texts = []
    while (numOfHandsToDeal > idx) {
      texts.push(<HandRow step={state.step} cards={state.playerCards} player='Player' handCount={idx + 1} />)
      idx = idx + 1
    }

    return texts
  }


  console.log({ state })

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.7 }}>
        <HandRow step={state.step} cards={state.handsDealt[state.handsDealt.length - 1]} player='Dealer' />
      </View>
      <View style={{ borderWidth: 1, padding: '3%' }}>
        <Text>🃏 Deck</Text>
        <Text>💲 {state.bet}</Text>
        <Text> ♦️♣️❤♠️ {state.handCount}</Text>
      </View>
      <ScrollView style={styles.flexOne}>
        {renderHands()}
      </ScrollView>
      <Composer step={state.step} state={state} setState={setState} startGame={startGame} />
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
  title: {
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  row: {
    width: '100%',
    padding: 10,
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
  },
  composorRow: {
    padding: '1%',
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
  composerButton: {
    flex: 1,
    margin: '1%',
    padding: '3%',
    alignItems: 'center',
    justifyContent: 'center',
  }
})



/*
  <View style={styles.value}>
    <Text style={{ textAlign: 'center' }}>
      💯🙏🤔🙌🏻🤡🥋👨🏻‍🎓🙇🏻‍♂️🧑🏻‍💻 👨🏻‍🏫 🧙🏻‍♂️ 🐒🦁🔫 ☮️ 📈 💂🏻‍♀️👨🏻‍🍳 ✍️⛵️🎢🗽
    </Text>
  </View>
*/