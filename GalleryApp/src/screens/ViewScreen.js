import { StyleSheet, View, Pressable, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { observer } from 'mobx-react'
import { MainStore } from '../store/mainStore'
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view/'
import { CloseIcon } from '../components/CloseIcon'

export const ViewScreen = observer(({ navigation }) => {
  const { url } = MainStore.currentPhoto

  const [ratio, setRatio] = useState(1)

  Image.getSize(url, (width, height) => {
    setRatio(width / height)
  })

  const windowWidth = Dimensions.get('window').width

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Info')}
        >
        <CloseIcon />
      </Pressable>
      <ReactNativeZoomableView
          maxZoom={5}
          zoomStep={0.5}
          initialZoom={1}
          minZoom={1}
          bindToBorders={true}
          onZoomAfter={this.logOutZoomState}
        >
          <Image
            source={{ uri: url }}
            style={{
              width: windowWidth,
              aspectRatio: ratio
            }} />
      </ReactNativeZoomableView>
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#363636'
  },
  button: {
    position: 'absolute',
    zIndex: 1,
    right: 10,
    top: 10
  },
  image: {
  }
})
