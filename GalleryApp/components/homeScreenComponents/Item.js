import { StyleSheet, Image, View, Pressable } from 'react-native'
import React, { useState } from 'react'

const Item = (props) => {

  const { image } = props

  const [ratio, setRatio] = useState(1)
  Image.getSize(image, (width, height) => setRatio(width / height))

  return (
    <View style={styles.itemContainer}>
      <Pressable>
        <Image source={{uri: image}} style={[styles.image, {aspectRatio: ratio}]} />
      </Pressable>
    </View>
  )
}

export default Item

const styles = StyleSheet.create({
    itemContainer: {
      alignItems: 'center',
      marginVertical: 5
    },
    image: {
        width: '100%',
        borderRadius: 20

    }
})