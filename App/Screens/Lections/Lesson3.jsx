import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import Colors from '../../Utils/Colors';
import { assets } from '../../../react-native.config';

export default function Lesson3() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('./../../../assets/images/Logo1.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>Lecția 3</Text>
            <Text style={styles.title1}>Planul de Cheltuieli</Text>
            <View style={styles.subContainer}>
            <Text style={styles.titlu}>Ce sunt Planurile de Cheltuieli?</Text>
                <Text style={styles.text}>
                    Sunt planuri care ne ajută să ne organizăm banii și să ne atingem obiectivele financiare.
                </Text>
                <Text style={styles.titlu}>De ce sunt importante Planurile de Cheltuieli?</Text>
                <Text style={styles.text}>
                    Ne ajută să fim organizați și să știm exact unde merg banii noștri.
                    {'\n'}
                    Ne îndrumă să facem alegeri bune cu banii noștri, astfel încât să ne atingem obiectivele financiare.
                    {'\n'}
                    Ne învață să fim responsabili și să economisim pentru viitor.
                </Text>
                <Text style={styles.titlu}>Cum să faci un Plan de Cheltuieli?</Text>
                <Text style={styles.text}>
                    1. Stabilește-ți obiectivele financiare: Scrie-ți ce vrei să realizezi cu banii tăi și cât de mulți bani vrei să aloci pentru fiecare obiectiv.
                    {'\n'}
                    2. Analizează-ți veniturile: Calculează câți bani primești și câți bani poți aloca pentru cheltuieli și economii.
                    {'\n'}
                    3. Împarte-ți cheltuielile: Stabilește cât de mulți bani vrei să cheltui pe diverse categorii, cum ar fi haine, mâncare, economii etc.
                    {'\n'}
                    4. Fii flexibil: Înțelege că planurile pot suferi modificări și e important să fii deschis să ajustezi planul în funcție de schimbările tale financiare.
                </Text>
                {/* Button */}
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Testează-ți cunoștințele</Text>
                </TouchableOpacity>
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
    text: {
        fontSize: 20,
        fontFamily: 'Arial',
        color: Colors.BLACK,
        marginBottom: 20,
    },
    title: {
        fontSize: 50,
        fontFamily: 'Arial-BoldMT',
        color: Colors.BEST,
        marginBottom: 20,
    },
    title1: {
        fontSize: 35,
        fontFamily: 'Arial-BoldMT',
        color: Colors.BORDER,
        backgroundColor: Colors.BEST,
        marginBottom: 20,
    },
    titlu: {
        fontSize: 30,
        fontFamily: 'Arial-BoldMT',
        color: Colors.WHITE,
        backgroundColor: Colors.BORDER,
        marginBottom: 20,
    },
    subContainer: {
        width: '100%',
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: Colors.BEST,
        paddingVertical: 10,
        paddingHorizontal: 20,
        height: 50,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        fontSize: 30,
        fontFamily: 'Arial-BoldMT',
        color: Colors.BORDER,
        textAlign: 'center',
    },
    subContainer: {
        width: '90%',
        height: 900, 
        }, 
});
