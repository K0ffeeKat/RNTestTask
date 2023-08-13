import { StyleSheet, Text, View, ActivityIndicator, Switch, Pressable, Image, FlatList, ScrollView } from 'react-native';
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
    // setIsLoading(false)
  }, [])

  return (
    <View style={styles.screenContainer}>
      <Switch 
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      { isEnabled ? <ImageListAlt navigation={navigation} /> : <ImageList navigation={navigation} />}
    </View>
  )
})

export default HomeScreen

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#363636'
  },
})
