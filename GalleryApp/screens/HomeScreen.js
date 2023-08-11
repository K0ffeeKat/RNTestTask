import { StyleSheet, Text, View, ActivityIndicator, Pressable, Image, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import React from 'react';

const HomeScreen = () => {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  const url = 'https://api.slingacademy.com/v1/sample-data/photos'

  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((json) => setData(json.photos))
    .catch((error) => console.error(error))
    .finally(() => setIsLoading(false))
  }, [])

  return (
    <View style={styles.screenContainer}>
      {
        isLoading ? <ActivityIndicator size='large'/> : <FlatList
          scrollEnabled={true}
          contentContainerStyle={styles.list}
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Pressable onPress={() => console.log(item.id)} style={styles.imageContainer}>
              <Image source={{uri: item.url}} style={{width: 320, height: 320, borderRadius: 20}}/>
            </Pressable>
          )}
        />
      }
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  list: {
    alignItems: 'center'
  },
  imageContainer: {
    marginVertical: 10,
    borderRadius: 20
  }
})