import { StyleSheet, FlatList, Pressable, Image } from 'react-native'
import { observer } from 'mobx-react'
import React from 'react'

export const ImageList = observer((props) => {
  const {
    allPhotos,
    onImagePress,
    numColumns,
    keyColumn,
    widthColumn,
    marginColumnHorizontal,
    aspectRatioColumn
  } = props

  return (
    <FlatList
      scrollEnabled={true}
      numColumns={numColumns}
      key={keyColumn}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.list}
      data={allPhotos}
      keyExtractor={photo => photo.id}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => onImagePress(item)}
            style={styles.imageContainer}>
            <Image
              source={{ uri: item.url }}
              style={
                [styles.image, {
                  width: widthColumn,
                  marginHorizontal: marginColumnHorizontal,
                  aspectRatio: aspectRatioColumn
                }]}/>
        </Pressable>
      )}
    />
  )
})

const styles = StyleSheet.create({
  imageContainer: {
    marginVertical: 5
  },
  image: {
    borderRadius: 20
  }
})
