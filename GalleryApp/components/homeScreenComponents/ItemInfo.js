import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { MainStore } from '../../store/mainStore'

const ItemInfo = ({navigation}) => {

  const {url, title, description, user} = MainStore.currentPic

  return (
    <View>
      <Pressable onPress={() => navigation.navigate('View', {url: url})}>
        <Image source={{uri: url}} style={styles.image}/>
      </Pressable>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>{user}</Text>
    </View>
  )
}

export default ItemInfo

const styles = StyleSheet.create({
    image: {
        width: 390,
        height: 300,
        borderRadius: 20
      }
})