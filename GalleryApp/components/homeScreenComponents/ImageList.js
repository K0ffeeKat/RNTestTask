import { StyleSheet, FlatList, Pressable, Image, View } from 'react-native'
import React from 'react'
import { MainStore } from '../../store/mainStore'

const ImageList = () => {

  return (
    <View>
        <FlatList
            scrollEnabled={true}
            contentContainerStyle={styles.list}
            data={MainStore.data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
            <Pressable onPress={() => console.log(item.id)} style={styles.imageContainer}>
                <Image source={{uri: item.url}} style={styles.image}/>
            </Pressable>
            )}
        />
    </View>
  )
}

export default ImageList

const styles = StyleSheet.create({
    list: {
    },
    imageContainer: {
        marginVertical: 7
      },
      image: {
        width: '95%',
        aspectRatio: 2 / 1,
        borderRadius: 20
      }
})