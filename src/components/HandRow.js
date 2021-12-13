import React from 'react'

import {
  Text,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native'

import { shuffledCards, BACK, calculateSumOfCards } from '../utils'

function HandRow({ idx, cards, player, handCount, step, focused }) {
  const renderCard = (c) => {
    return (
      <View>
        {c}
      </View>
    )
  }

  const renderCards = () => {
    if (step === 0) return [BACK, BACK]
    const dealtCards = []
    // FIXME Real Game
    for (const [i, v] of cards.entries()) {
      if (player === 'Player') {
        dealtCards.push(renderCard(v.component))
      } else {
        if (step === 1) {
          dealtCards.push(renderCard(BACK))
        }
        if (step === 2) {
          dealtCards.push(renderCard(v.component))
        }
      }
    }

    return dealtCards
  }
  const text = player === 'Player' ? 'Hand: ' + handCount : 'Dealer'
  // const text = player === 'Dealer' ? "What could defeat the might of two kings who've combined their hearts and treasures" : "Dark aces which both lead and push the spades and clubs of the people"
  // const text = player === 'Dealer' ? "Điều gì có thể đánh bại sức mạnh của hai vị vua đã kết hợp trái tim và kho báu của họ" : "Những con át chủ bài vừa dẫn đầu vừa thúc đẩy quân xì bích và chuồng"

  const isDealer = player === 'Dealer'

  const rowStyles = { ...styles.rowTitle, alignSelf: isDealer ? 'flex-start' : 'flex-end' }

  return (
    <View key={idx} style={[styles.row]}>
      {player === 'Dealer' && <ScrollView horizontal style={[styles.rowContainer]}>
        {renderCards()}
      </ScrollView>}
      <Text style={rowStyles} />
      <Text style={rowStyles}>{text}</Text>
      <Text style={rowStyles}>{!isDealer && calculateSumOfCards(cards)}</Text>
      {player === 'Player' && <ScrollView horizontal style={[styles.rowContainer, { borderWidth: 1 }, step === 1 && focused && { borderColor: 'green' }]}>
        {renderCards()}
      </ScrollView>}
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
    padding: '2%',
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


export default HandRow