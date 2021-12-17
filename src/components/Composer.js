import React from 'react'

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

function RoundScoreBoard({ state }) {
  return (
    <View>
      <Text>ScoreBoard</Text>
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
      <View style={[styles.container, { alignItems: 'flex-end', justifyContent: 'center' }]}>
        <TouchableOpacity onPress={stay} style={styles.button}>
          <Text>Stay</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={hit} style={styles.button}>
          <Text>Hit</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const renderOutcomeText = (idx) => {
    const { handsDealt } = state
    const dealerSum = handsDealt[handsDealt.length - 1].sum
    const handSum = handsDealt[idx].sum
    if (dealerSum === handSum) return 'Push'
    if (dealerSum > 21 && handSum > 21) return 'Push'
    if (handSum > 21 && dealerSum <= 21) return 'Lose'
    if (dealerSum > 21 && handSum <= 21) return 'Win'
    return dealerSum > handSum ? 'Lose' : 'Win'
  }

  const renderOutcome = () => {
    const { handsDealt } = state
    let handIdx = 0
    const results = []
    while (handIdx < handsDealt.length - 1) {
      results.push(
        <Text>{renderOutcomeText(handIdx)}</Text>
      )
      handIdx++
    }
    return results
  }

  if (step === 2) {
    console.log({ composerState: state })
    return (
      <View style={styles.container}>
        {renderOutcome()}
        <RoundScoreBoard state={state} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '1%',
    borderTopWidth: 1
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
  }
})

export default Composer