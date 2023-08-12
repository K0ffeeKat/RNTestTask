import { StyleSheet, Text, View, ActivityIndicator, Pressable, Image, FlatList, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import React from 'react';
import ImageList from '../components/homeScreenComponents/ImageList';
import { MainStore } from '../store/mainStore';

const HomeScreen = () => {

  // const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  const url = 'https://api.slingacademy.com/v1/sample-data/photos'


  useEffect(() => {
    MainStore.loadPics()
  }, [])

  console.log(MainStore.data)

  return (
    <View style={styles.screenContainer}>
      <ImageList />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#363636'
  }
})