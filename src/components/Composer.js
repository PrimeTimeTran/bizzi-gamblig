import React from 'react'

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

function Composer({ startGame, stay, setState, hit, state }) {
  const { handCount, bet, step } = state
  const update = (k, v) => {
    setState({ ...state, [k]: v })
  }
  if (step === 0) {
    return (
      <View style={styles.container}>
        <View style={styles.composerRow}>
          <View style={styles.composerButton}><Text>{handCount}</Text></View>
          <TouchableOpacity onPress={() => update('handCount', handCount !== 1 ? handCount - 1 : 1)} style={[styles.composerButton, styles.minusButton]}><Text>-</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => update('handCount', handCount < 5 ? handCount + 1 : 5)} style={[styles.composerButton, styles.addButton]}><Text>+</Text></TouchableOpacity>
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
  if (step === 2) {
    console.log({ state });
    return (
      <View style={styles.container}>
        <Text>Hi</Text>
        <Text>Hoo</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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