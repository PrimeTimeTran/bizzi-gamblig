import React from 'react'

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

function Composer(props) {
  const { stay, step, setState, hit, state } = props
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
          <TouchableOpacity onPress={props.startGame} style={{ flex: 1, margin: '1%', padding: '3%', justifyContent: 'center', alignItems: 'center' }}><Text>Deal</Text></TouchableOpacity>
        </View>
      </View>
    )
  }
  if (step === 1) {
    return (
      <View style={[styles.flexOne, { alignItems: 'flex-end', justifyContent: 'center' }]}>
        <TouchableOpacity onPress={stay} style={{ width: '50%', height: '20%', borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Stay</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={hit} style={{ width: '50%', height: '20%', borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Hit</Text>
        </TouchableOpacity>
      </View>
    )
  }
  if (step === 2) {
    return (
      <View style={styles.flexOne}>
        <Text>Hi</Text>
        <Text>Hoo</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
    borderTopWidth: 1
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

export default Composer