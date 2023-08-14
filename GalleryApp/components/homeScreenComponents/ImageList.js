import { StyleSheet, FlatList, Pressable, Image } from 'react-native'
import { observer } from 'mobx-react';
import React from 'react'
import { MainStore } from '../../store/mainStore'
import { action } from 'mobx';

const ImageList = observer(({navigation}) => {

  return (
      <FlatList
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        data={MainStore.data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Pressable 
            onPress={action(() => {
              navigation.navigate('Info')
              MainStore.updateCurrentPic({item})
            })}
              style={styles.imageContainer}>
              <Image source={{uri: item.url}} style={styles.image}/>
          </Pressable>
          )}
      />
  )
})

export default ImageList

const styles = StyleSheet.create({
    list: {
    },
    imageContainer: {
        marginVertical: 7
      },
      image: {
        width: 390,
        aspectRatio: 2 / 1,
        borderRadius: 20
      }
})