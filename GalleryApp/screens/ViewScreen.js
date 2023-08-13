import { StyleSheet, Text, View, Pressable, Image} from 'react-native'
import React, { useState } from 'react'
import { observer } from 'mobx-react'
import { MainStore } from '../store/mainStore'

const ViewScreen = observer(({navigation}) => {
  
  const {url, title, description, user} = MainStore.currentPic

  const [ratio, setRatio] = useState(1)

  Image.getSize(url, (width, height) => setRatio(width / height))

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button} 
        onPress={() => navigation.navigate('Info')}
        >
        <Text>X</Text>
      </Pressable>

      <View>
        <Image source={{uri: url}} style={[styles.image, {aspectRatio: ratio}]} />
      </View>

    </View>
  )
})

export default ViewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  button: {
    position: 'absolute',
    right: 10,
    top: 10
  },
  image: {
    
  }
})