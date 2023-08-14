import { StyleSheet, View, ActivityIndicator, Switch} from 'react-native';
import { useState, useEffect } from 'react';
import React from 'react';
import ImageList from '../components/homeScreenComponents/ImageList';
import { MainStore } from '../store/mainStore';
import { observer } from 'mobx-react';
import ImageListAlt from '../components/homeScreenComponents/ImageListAlt';

const HomeScreen = observer(({navigation}) => {

  const [isLoading, setIsLoading] = useState(true);

  // Setting up the view switch
  const [isEnabled, setIsEnabled] = useState(false)

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  useEffect(() => {
    MainStore.loadPics()
    setIsLoading(false)
  }, [])

  return (
    <View style={styles.screenContainer}>
      <View style={styles.switch}>
        <Switch 
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={styles.listContainer}>
        { isEnabled ? <ImageListAlt navigation={navigation} /> : <ImageList navigation={navigation} />}
      </View>
    </View>
  )
})

export default HomeScreen

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
  }
})
