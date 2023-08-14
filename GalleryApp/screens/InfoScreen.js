import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import ItemInfo from '../components/homeScreenComponents/ItemInfo'
import { MainStore } from '../store/mainStore'
import { observer } from 'mobx-react'
import BackIcon from '../components/homeScreenComponents/BackIcon'

const InfoScreen = observer(({navigation}) => {

  const {url, title, description, user} = MainStore.currentPic

  return (
    <View style={{flex: 1, backgroundColor: '#363636'}}>
      <Pressable 
        onPress={() => navigation.navigate('Home')}
        style={{marginLeft: 15, marginTop: 15}}
        >
        <BackIcon />
      </Pressable>
      <ItemInfo 
        itemData={[url, title, description, user]} 
        navigation={navigation}/>
    </View>
  )
})

export default InfoScreen

const styles = StyleSheet.create({})