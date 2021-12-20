import React from 'react'

import {
  Text,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native'

import { BACK, calculateSumOfCards } from '../utils'

function HandRow({ idx, cards, player, handNum, step, focused, show }) {
  const renderCard = (c, idx) => {
    const sumUpToCard = calculateSumOfCards([...cards].splice(0, idx + 1))
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Text style={{ margin: 3, alignSelf: 'flex-end' }}>{idx + 1}</Text>
        <View style={{ flex: 1, alignItems: 'flex-start' }}>
        <Text>{sumUpToCard}</Text>
          {c.component || BACK}
        </View>
      </View>
    )
  }

  const renderCards = () => {
    if (show || step === 0) return [BACK, BACK]
    const dealtCards = []
    for (const [i, v] of cards.entries()) {
      if (player === 'Player') {
        dealtCards.push(renderCard(v, i))
      } else {
        if (step === 1) {
          dealtCards.push(renderCard(BACK, i))
        }
        if (step === 2) {
          dealtCards.push(renderCard(v, i))
        }
      }
    }

    return dealtCards
  }
  const text = player === 'Player' ? 'Hand: ' + handNum : 'Dealer'
  // const text = player === 'Dealer' ? "What could defeat the might of two kings who've combined their hearts and treasures" : "Dark aces which both lead and push the spades and clubs of the people"
  // const text = player === 'Dealer' ? "Điều gì có thể đánh bại sức mạnh của hai vị vua đã kết hợp trái tim và kho báu của họ" : "Những con át chủ bài vừa dẫn đầu vừa thúc đẩy quân xì bích và chuồng"

  const isDealer = player === 'Dealer'

  const rowStyles = { ...styles.rowTitle, alignSelf: isDealer ? 'flex-start' : 'flex-end' }

  return (
    <View key={idx} style={styles.row}>
      {player === 'Dealer' &&
        <ScrollView horizontal style={[styles.rowContainer]}>
          {renderCards()} 
        </ScrollView>}
      <Text style={rowStyles} />
      <Text style={rowStyles}>{text}</Text>
      <Text style={rowStyles}>{calculateSumOfCards(cards)}</Text>
      {player === 'Player' &&
        <ScrollView horizontal style={[styles.rowContainer, { borderWidth: 1.5 }, step === 1 && focused && { borderColor: 'green' }]}>
          {renderCards()}
        </ScrollView>}
    </View>
  )
}

const styles = StyleSheet.create({
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
    padding: '2%',
    flexDirection: 'row',
  },
  button: {
    borderWidth: 1,
    borderColor: 'black'
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


export default HandRow