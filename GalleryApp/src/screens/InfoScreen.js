import { StyleSheet, View, Pressable } from 'react-native'
import React from 'react'
import { ItemInfo } from '../components/ItemInfo'
import { MainStore } from '../store/mainStore'
import { observer } from 'mobx-react'
import { BackIcon } from '../components/BackIcon'

export const InfoScreen = observer(({ navigation }) => {
  const currentPhoto = MainStore.currentPhoto

  const handleFullscreenView = () => {
    navigation.navigate('View')
  }

  return (
    <View style={styles.mainContainer}>
      <Pressable
        onPress={() => navigation.navigate('Home')}
        style={styles.backIcon}
        >
        <BackIcon />
      </Pressable>
      <ItemInfo
        onImagePress={handleFullscreenView}
        currentPhotoData={currentPhoto}
        navigation={navigation}/>
    </View>
  )
})

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#363636'
  },
  backIcon: {
    marginLeft: 15,
    marginTop: 15
  }
})
