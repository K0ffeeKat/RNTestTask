import { StyleSheet, View, Switch } from 'react-native'
import { React, useEffect } from 'react'
import { ImageList } from '../components/ImageList'
import { MainStore } from '../store/mainStore'
import { observer } from 'mobx-react'
import { Button } from '../components/Button'
import { SwitchStore } from '../store/switchStore'
import { AuthStore } from '../store/authStore'
import auth from '@react-native-firebase/auth'

export const HomeScreen = observer(({ navigation }) => {

  const isEnabled = SwitchStore.isEnabled
  const { allPhotos, error } = MainStore
  const { cleanUp } = AuthStore

  useEffect(() => {
    try {
      MainStore.loadPhotos()
    } catch (error) {
      console.error(error)
    }
  }, [])

  const setColumnSwitch = () => {
    SwitchStore.setIsEnabled()
  }

  const handleImagePress = (photo) => {
    MainStore.updateCurrentPhoto(photo)
    navigation.navigate('Info')
  }

  const signOut = () => {
    auth()
      .signOut()
      .then(cleanUp)
      .catch(error => console.log(error))
  }

  return (
    <View style={styles.screenContainer}>
      <View style={styles.switch}>
        <Switch
          onValueChange={setColumnSwitch}
          value={isEnabled}
        />
      </View>
      <View style={styles.listContainer}>
        <ImageList
          onImagePress={handleImagePress}
          allPhotos={allPhotos}
          numColumns={isEnabled ? 2 : 1}
          keyColumn={isEnabled ? 'imageListWithTwoColumns' : 'imageListWithOneColumn'}
          widthColumn={isEnabled ? 190 : 390}
          marginColumnHorizontal={isEnabled ? 5 : 0}
          aspectRatioColumn={isEnabled ? 1 / 1 : 2 / 1}
        />
      </View>
      <View style={styles.signOutContainer}>
        <Button
          onPress={signOut}
          buttonText="LOG OUT"
        />
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#363636'
  },
  switch: {
    paddingTop: 10,
    paddingBottom: 10,
    marginRight: 5
  },
  listContainer: {
    flex: 1,
    alignItems: 'center'
  },
  signOutContainer: {
    marginVertical: 10,
    alignItems: 'center'
  }
})
