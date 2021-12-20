import React from 'react'

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import { calculateRoundOutcome } from '../utils'

function RoundScoreBoard({ state }) {
  const { handsDealt } = state
  console.log({ state });

  const outcome = (idx) => {
    const handSum = handsDealt[idx].sum
    const dealerSum = handsDealt[handsDealt.length - 1].sum

    if (dealerSum === handSum) return 'Push'
    if (dealerSum > 21 && handSum > 21) return 'Push'
    if (handSum > 21 && dealerSum <= 21) return 'Lose'
    if (dealerSum > 21 && handSum <= 21) return 'Win'
    return dealerSum > handSum ? 'Lose' : 'Win'
  }

  const renderOutcome = () => {
    const { handsDealt, bet } = state
    let handIdx = 0
    const results = []
    const values = []
    while (handIdx < handsDealt.length - 1) {
      const result = outcome(handIdx)
      const color = result === 'Win' ? 'green' : result === 'Lose' ? 'red' : null
      const sign = result === 'Win' ? '+' : result === 'Lose' ? '-' : null
      values.push(result)
      results.push(
        <View
          style={styles.outcomeRow}>
          <Text
            style={{ color }}
          >
            {handIdx + 1}  - {' '}{result}
          </Text>
          <Text style={{ color }}>{sign} {result !== 'Push' && bet || 0}</Text>
        </View>
      )
      handIdx++
    }
    const finalBetResult = calculateRoundOutcome(values, bet)
    results.push(
      <View style={{ marginBottom: '20%', alignItems: 'flex-end' }}>
        <Text>Round Outcome: {finalBetResult}</Text>
      </View>
    )
    return results
  }

  return (
    <View style={styles.container}>
      <Text>ScoreBoard</Text>
      {renderOutcome()}
    </View>
  )
}

function Composer({ startGame, stay, setState, hit, state }) {
  const { handCount, bet, step } = state

  const update = (k, v) => {
    setState({ ...state, [k]: v })
  }

  if (step === 0) {
    return (
      <View style={styles.container}>
        <View style={styles.composerRow}>
          <View style={styles.composerButton}><Text>{handCount - 1}</Text></View>
          <TouchableOpacity onPress={() => update('handCount', handCount >= 3 ? handCount - 1 : 2)} style={[styles.composerButton, styles.minusButton]}><Text>-</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => update('handCount', handCount < 6 ? handCount + 1 : 6)} style={[styles.composerButton, styles.addButton]}><Text>+</Text></TouchableOpacity>
        </View>
        <View style={styles.composerRow}>
          <View style={styles.composerButton}><Text>${bet}</Text></View>
          <TouchableOpacity onPress={() => update('bet', bet !== 100 ? bet - 100 : 100)} style={[styles.composerButton, styles.minusButton]}><Text>-</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => update('bet', bet + 100)} style={[styles.composerButton, styles.addButton]}><Text>+</Text></TouchableOpacity>
        </View>
        <View style={styles.composerRow}>
          <TouchableOpacity onPress={startGame} style={styles.startButton}><Text>Deal</Text></TouchableOpacity>
        </View>
      </View>
    )
  }

  if (step === 1) {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={stay} style={styles.button}>
          <Text>Stay</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={hit} style={styles.button}>
          <Text>Hit</Text>
        </TouchableOpacity>
      </View>
    )
  }

  if (step === 2) {
    return (
      <RoundScoreBoard state={state} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '1%',
    borderTopWidth: 1,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  startButton: {
    flex: 1,
    margin: '1%',
    padding: '3%',
    alignItems: 'center',
    backgroundColor: 'green',
    justifyContent: 'center',
  },
  button: {
    borderWidth: 1,
    borderColor: 'black'
  },
  composerRow: {
    padding: '1%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  composerButton: {
    flex: 1,
    margin: '1%',
    padding: '3%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
  },
  minusButton: {
    backgroundColor: 'lightpink'
  },
  addButton: {
    backgroundColor: 'lightgreen'
  },
  value: {
    flex: 1,
    alignItems: 'flex-end'
  },
  button: {
    width: '50%',
    height: '20%',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  outcomeRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})

export default Composer