import { View, Text, Image, StyleSheet, ScrollView,TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import Colors from '../../Utils/Colors';
import { assets } from '../../../react-native.config';

export default function Homegames({navigation}) {
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
        source={require('./../../../assets/images/Untitled_Artwork 4.png')}
        style={styles.backgroundImage}
        >
      <TouchableOpacity style={styles.button} 
        onPress={() => navigation.navigate("Joc1")}>
          <Text style={{textAlign:'center', fontSize:34,fontFamily:'Inria Sans', color:Colors.BLACK}}>
              1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} 
        onPress={() => navigation.navigate("Lesson2")}>
          <Text style={{textAlign:'center', fontSize:34,fontFamily:'Inria Sans', color:Colors.BLACK}}>
              2
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} 
        onPress={() => navigation.navigate("Lesson3")}>
          <Text style={{textAlign:'center', fontSize:34,fontFamily:'Inria Sans', color:Colors.BLACK}}>
              3
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} 
        onPress={() => navigation.navigate("Lesson4")}>
          <Text style={{textAlign:'center', fontSize:34,fontFamily:'Inria Sans', color:Colors.BLACK}}>
              4
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} 
        onPress={() => console.log("Button let s")}>
          <Text style={{textAlign:'center', fontSize:34,fontFamily:'Inria Sans', color:Colors.BLACK}}>
              5
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} 
        onPress={() => console.log("Button let s")}>
          <Text style={{textAlign:'center', fontSize:34,fontFamily:'Inria Sans', color:Colors.BLACK}}>
              6
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} 
        onPress={() => console.log("Button let s")}>
          <Text style={{textAlign:'center', fontSize:34,fontFamily:'Inria Sans', color:Colors.BLACK}}>
              7
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} 
        onPress={() => console.log("Button let s")}>
          <Text style={{textAlign:'center', fontSize:34,fontFamily:'Inria Sans', color:Colors.BLACK}}>
              8
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} 
        onPress={() => console.log("Button let s")}>
          <Text style={{textAlign:'center', fontSize:34,fontFamily:'Inria Sans', color:Colors.BLACK}}>
              9
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} 
        onPress={() => console.log("Button let s")}>
          <Text style={{textAlign:'center', fontSize:34,fontFamily:'Inria Sans', color:Colors.BLACK}}>
              10
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} 
        onPress={() => console.log("Button let s")}>
          <Text style={{textAlign:'center', fontSize:34,fontFamily:'Inria Sans', color:Colors.BLACK}}>
              11
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} 
        onPress={() => console.log("Button let s")}>
          <Text style={{textAlign:'center', fontSize:34,fontFamily:'Inria Sans', color:Colors.BLACK}}>
              12
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} 
        onPress={() => console.log("Button let s")}>
          <Text style={{textAlign:'center', fontSize:34,fontFamily:'Inria Sans', color:Colors.BLACK}}>
              13
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} 
        onPress={() => console.log("Button let s")}>
          <Text style={{textAlign:'center', fontSize:34,fontFamily:'Inria Sans', color:Colors.BLACK}}>
              14
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} 
        onPress={() => console.log("Button let s")}>
          <Text style={{textAlign:'center', fontSize:34,fontFamily:'Inria Sans', color:Colors.BLACK}}>
              15
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} 
        onPress={() => console.log("Button let s")}>
          <Text style={{textAlign:'center', fontSize:34,fontFamily:'Inria Sans', color:Colors.BLACK}}>
              16
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} 
        onPress={() => console.log("Button let s")}>
          <Text style={{textAlign:'center', fontSize:34,fontFamily:'Inria Sans', color:Colors.BLACK}}>
              17
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} 
        onPress={() => console.log("Button let s")}>
          <Text style={{textAlign:'center', fontSize:34,fontFamily:'Inria Sans', color:Colors.BLACK}}>
              18
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} 
        onPress={() => console.log("Button let s")}>
          <Text style={{textAlign:'center', fontSize:34,fontFamily:'Inria Sans', color:Colors.BLACK}}>
              19
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
  subContainer: {
    width: '100%',
    height: 2000, 
    },   

  button:{
    padding:23,
    backgroundColor:Colors.WHITE,
    borderRadius: 90,
    marginTop:24,
    width:80,
    height:80,
    alignSelf:2,
    borderWidth: 1, 
    borderColor: Colors.BORDER,
    
},

});
