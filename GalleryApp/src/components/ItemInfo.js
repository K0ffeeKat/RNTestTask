import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

export const ItemInfo = (props) => {
  const { url, title, description, user } = props.currentPhotoData

  const { onImagePress } = props

  return (
    <View>
      <View style={styles.picContainer}>
        <Pressable onPress={onImagePress}>
          <Image
            source={{ uri: url }}
            style={styles.image}
            />
        </Pressable>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.authorContainer}>
        <Text style={styles.userReference}>CREATED BY {user}</Text>
        <Image
          source={{ uri: url }} 
          style={styles.profilePic}
          />
      </View>
    </View>
  )
}

export default ItemInfo

const styles = StyleSheet.create({
  image: {
    width: 380,
    height: 250,
    borderRadius: 20
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginHorizontal: 20
  },
  picContainer: {
    alignItems: 'center',
    marginTop: 30
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  authorContainer: {
    marginRight: 15,
    marginTop: 30,
    flexDirection: 'row',
    marginLeft: 'auto',
    alignItems: 'center'
  },
  title: {
    color: '#b6fcc9',
    textAlign: 'center',
    fontSize: 22,
    fontFamily: 'Roboto-Medium',
    fontWeight: '800',
    paddingHorizontal: 20,
    marginBottom: 10
  },
  description: {
    textAlign: 'center',
    color: '#d9dbda',
    fontSize: 16,
    paddingHorizontal: 40,
    fontFamily: 'Roboto-Regular'
  },
  userReference: {
    fontFamily: 'Roboto-Regular',
    color: '#33f567',
    fontSize: 13
  }
})
