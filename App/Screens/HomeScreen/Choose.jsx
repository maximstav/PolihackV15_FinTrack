import { View, Text, Image, StyleSheet, ScrollView,TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import Colors from '../../Utils/Colors';
import { assets } from '../../../react-native.config';

export default function Choose({navigation}) {
    const NumButtons=5;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('./../../../assets/images/Logo1.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>FINTRACK</Text>
      <View style={styles.subContainer}>
      <ImageBackground
        source={require('./../../../assets/images/Untitled_Artwork copy.png')}
        style={styles.backgroundImage}
        >
      <TouchableOpacity style={styles.button} 
        onPress={() => navigation.navigate("Home")}>
          <Text style={{textAlign:'center', fontSize:42,fontFamily:'Inria Sans', color:Colors.BLACK}}>
              Lecții
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} 
        onPress={() => navigation.navigate("Homegames")}>
          <Text style={{textAlign:'center', fontSize:42,fontFamily:'Inria Sans', color:Colors.BLACK}}>
              Jocuri
          </Text>
        </TouchableOpacity>
        </ImageBackground>
      </View>
      
      
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 55,
    
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'Arial-BoldMT',
    color: Colors.BEST,
    marginBottom: 20,
  },

  button:{
    padding:23,
    backgroundColor:Colors.BEST,
    borderRadius: 20,
    marginTop:80,
    marginBottom:100, 
    width:200,
    height:100,
    alignSelf:2,
    borderWidth: 1, 
    borderColor: Colors.BORDER,
    
},

subContainer: {
    width: '100%',
    height: 2000, 
    },   


});
