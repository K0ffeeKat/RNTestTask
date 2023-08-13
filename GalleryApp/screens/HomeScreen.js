import { StyleSheet, Text, View, ActivityIndicator, Pressable, Image, FlatList, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import React from 'react';
import ImageList from '../components/homeScreenComponents/ImageList';
import { MainStore } from '../store/mainStore';
import { observer } from 'mobx-react';

const HomeScreen = observer(({navigation}) => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    MainStore.loadPics()
    setIsLoading(false)
  }, [])

  console.log(MainStore.data)
  console.log(isLoading)

  return (
    <View style={styles.screenContainer}>
      { isLoading ? <ActivityIndicator /> : <ImageList navigation={navigation}/>}
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
