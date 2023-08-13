import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import ItemInfo from '../components/homeScreenComponents/ItemInfo'
import { MainStore } from '../store/mainStore'
import { observer } from 'mobx-react'

const InfoScreen = observer(({route, navigation}) => {

  const {url, title, description, user} = MainStore.currentPic

  console.log(url)

  return (
    <View>
      <Pressable onPress={() => navigation.navigate('Home')}>
        <Text>Back</Text>
      </Pressable>
      <ItemInfo 
        itemData={[url, title, description, user]} 
        navigation={navigation}/>
    </View>
  )
})

export default InfoScreen

const styles = StyleSheet.create({})