import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import Game from './src/components/Game'

export default function App () {
  return (
    <View style={styles.container}>
      <Game />
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: '1%',
    justifyContent: 'center',
    backgroundColor: '#F0F2F5'
  }
})
