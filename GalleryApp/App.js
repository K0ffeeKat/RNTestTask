import React from 'react'
import { Providers } from './src/stacks/index'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App = () => {
  return (
    <SafeAreaProvider>
      <Providers />
    </SafeAreaProvider>
  )
}

export default App
