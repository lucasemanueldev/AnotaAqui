import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 


export default function App() {

  const image = require('./recursos/cabecalho.png')

  return (
    <View style={{flex:1}}>
      <StatusBar hidden/>
      <View>
        <ImageBackground source={image} style={styles.image}></ImageBackground>
        <AntDesign name="minus" size={24} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image:{
    resizeMode: 'cover',
    Width: '100%',
    height:'40%'
  }
});
