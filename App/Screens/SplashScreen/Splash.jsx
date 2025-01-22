import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function Splash() {
    return(
        <View>
            <Image source = {require('./../../../assets/images/Logo.jpeg')} 
                    style={styles.Image}
            />
      </View>
    )
}

const styles = StyleSheet.create({
    Image:{
        width:300,
        height: 300,
        marginTop:100,
        alignSelf:2
    }
})