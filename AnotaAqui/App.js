import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {

  const image = require('./recursos/cabecalho.png')

  return (
    <View style={{flex:1}}>
      <StatusBar hidden/>
      <View>
        <ImageBackground source={image} style={styles.image}></ImageBackground>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image:{
    resizeMode: 'cover',
    Width: '100%',
    height:'50%'
  }

});
