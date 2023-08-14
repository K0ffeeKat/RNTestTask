import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { MainStore } from '../../store/mainStore'

const ItemInfo = ({navigation}) => {

  const {url, title, description, user} = MainStore.currentPic

  return (
    <View>
      <View style={styles.picContainer}>
        <Pressable onPress={() => navigation.navigate('View', {url: url})}>
          <Image source={{uri: url}} style={styles.image}/>
        </Pressable>
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.text]}>{title}</Text>
        <Text style={[styles.text]}>{description}</Text>
      </View>
      <View style={styles.authorContainer}>
        <Text>Made by </Text>
        <Text>user {user}</Text>
        <Image source={{uri: url}} style={styles.profilePic}/>
      </View>
    </View>
  )
}

export default ItemInfo

const styles = StyleSheet.create({
    image: {
        width: 380,
        height: 250,
        borderRadius: 20
      },
    profilePic: {
      width: 50,
      height: 50,
      borderRadius: 50,
      marginHorizontal: 20
    },
    picContainer: {
      alignItems: 'center',
      marginTop: 30
    },
    textContainer: {
      alignItems: 'center',
      marginTop: 30,
      marginBottom: 20
    },
    authorContainer: {
      flexDirection: 'row',
      marginLeft: 'auto',
      alignItems: 'center'
    }
})