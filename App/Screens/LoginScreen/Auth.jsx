import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight} from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function Auth({navigation}) {
  return (
    <View style={{backgroundColor:Colors.WHITE}}>
      <Image source = {require('./../../../assets/images/Logo1.png')} 
            style={styles.loginImage}
      />
      <Text style = {{textAlign:'center',fontSize:70,fontFamily: 'Arial-BoldMT',color:Colors.BEST}}>
       FINTRACK
      </Text>
      <View style={styles.subContainer}>
        <TouchableOpacity style={styles.button} 
        onPress={() => navigation.navigate("LoginPage")}>
          <Text style={{textAlign:'center', fontSize:24,fontFamily:'Inria Sans', color:Colors.BLACK}}>
              Log in
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2} 
        onPress={() => console.log("Button 2")}>
          <Text style={{textAlign:'center', fontSize:24,fontFamily:'Inria Sans', color:Colors.BLACK}}>
              Create account
          </Text>
        </TouchableOpacity>
        
        <TouchableHighlight style={styles.guestButton} onPress={() => navigation.navigate("Choose")} underlayColor={Colors.WHITE}>
          <Text style={styles.buttonText}>Use Guest Mode</Text>
        </TouchableHighlight>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    loginImage:{
        width:300,
        height: 260,
        marginTop:100,
        alignSelf:2
    },
    subContainer:{
        width:'100%',
        height:'70%',
    },
    button:{
        padding:20,
        backgroundColor:Colors.BEST,
        borderRadius: 10,
        marginTop:100,
        width:300,
        height:70,
        alignSelf:2,
        borderWidth: 3, 
        borderColor: Colors.BORDER,
        
    },

    button2:{
      padding:20,
      backgroundColor:Colors.BEST,
      borderRadius:10,
      marginTop:50,
      width:300,
      height:70,
      alignSelf:2,
      borderWidth: 3, 
      borderColor: Colors.BORDER,
    },

    guestButton: {
      padding: 20,
      marginTop: 10,
      alignSelf: 'center'
    },buttonText: {
      textAlign: 'center',
      fontSize: 17,
      fontFamily: 'Inria Sans',
      color: Colors.BLACK
    }
  })

 