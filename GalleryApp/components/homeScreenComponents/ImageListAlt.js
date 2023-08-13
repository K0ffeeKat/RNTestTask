import { StyleSheet, FlatList, Pressable, Image, View, Dimensions, Text } from 'react-native'
import React from 'react'
import { MainStore } from '../../store/mainStore'

const ImageListAlt = ({navigation}) => {

  return (
      <FlatList
        numColumns={2}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        data={MainStore.data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Pressable 
            onPress={() => {
              navigation.navigate('Info')
              MainStore.updateCurrentPic({item})
            }}
              style={styles.imageContainer}>
              <Image source={{uri: item.url}} style={styles.image}/>
          </Pressable>
          )}
      />
  )
}

export default ImageListAlt

const styles = StyleSheet.create({
    list: {
    },
    imageContainer: {
        marginVertical: 7,
        marginHorizontal: 5
      },
      image: {
        width: 190,
        aspectRatio: 2 / 1,
        borderRadius: 20
      }
})