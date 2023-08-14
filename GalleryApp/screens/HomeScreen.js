import { StyleSheet, View, ActivityIndicator, Switch} from 'react-native';
import { useState, useEffect, useContext } from 'react';
import React from 'react';
import { AuthContext } from '../stacks/AuthProvider';
import ImageList from '../components/homeScreenComponents/ImageList';
import { MainStore } from '../store/mainStore';
import { observer } from 'mobx-react';
import { action } from 'mobx';
import ImageListAlt from '../components/homeScreenComponents/ImageListAlt';
import Button from '../components/auth/Button';

const HomeScreen = observer(({navigation}) => {

  const {signOut} = useContext(AuthContext)

  const [isEnabled, setIsEnabled] = useState(false)

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  MainStore.loadPics()

  return (
    <View style={styles.screenContainer}>
      <View style={styles.switch}>
        <Switch 
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={styles.listContainer}>
        { isEnabled ? <ImageListAlt navigation={navigation} /> : <ImageList navigation={navigation} />}
      </View>
      <View 
        style={{
          marginVertical: 10,
          alignItems: 'center'
        }}
        >
        <Button 
          onPress={() => signOut()}
          buttonText='LOG OUT'
        />
      </View>
    </View>
  )
})

export default HomeScreen

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#363636'
  },
  switch: {
    paddingTop: 10,
    paddingBottom: 10,
    marginRight: 5
  },
  listContainer: {
  flex: 1,
  alignItems: 'center'
  }
})
