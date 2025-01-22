import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import Colors from '../../Utils/Colors';
import { assets } from '../../../react-native.config';

export default function Lection1({navigation}) {

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('./../../../assets/images/Logo1.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>Lecția 1</Text>
            <Text style={styles.title1}>Luarea deciziilor ținând cont de cheltuieli</Text>
            <View style={styles.subContainer}>
                <Text style={styles.titlu}>Dorințe vs. Necesități:</Text>
                <Text style={styles.text}>
                    Dorințe: Lucruri distractive sau plăcute pe care le dorim, dar nu sunt esențiale pentru supraviețuire, cum ar fi jucăriile noi sau hainele la modă.
                    {'\n'}
                    Necesități: Lucruri de bază de care avem nevoie pentru a trăi, cum ar fi mâncarea, îmbrăcămintea și un loc de dormit.
                </Text>

                <Text style={styles.titlu}>Bugetul:</Text>
                <Text style={styles.text}>
                    Ce este: O hartă a banilor noștri care ne arată câți bani avem și cum îi cheltuim.
                    {'\n'}
                    Cum se face: Înregistrăm câți bani câștigăm și cât cheltuim pe lucruri precum mâncare, haine și alte nevoi sau dorințe.
                </Text>

                <Text style={styles.titlu}>Luarea deciziilor financiare:</Text>
                <Text style={styles.text}>
                    Cum funcționează: Când trebuie să alegem între mai multe lucruri de cumpărat, ne întrebăm dacă achiziția este esențială sau există ceva mai important pe care îl putem cumpăra.
                    {'\n'}
                    Exemplu: Alegerea între o jucărie nouă și reparația unei haine importante - prioritatea este să ne asigurăm că nevoile de bază sunt acoperite înainte de a ne bucura de dorințe.
                </Text>

                <Text style={styles.titlu}>Economisirea:</Text>
                <Text style={styles.text}>
                    Ce este: Punerea deoparte a unei părți din bani pentru viitor.
                    {'\n'}
                    De ce este importantă: Ajută la realizarea obiectivelor pe termen lung, cum ar fi cumpărarea unui lucru mare sau economisirea pentru educație.
                </Text>

                <Text style={styles.titlu}>Revizuirea și ajustarea:</Text>
                <Text style={styles.text}>
                    Ce înseamnă: Reevaluarea bugetului și a deciziilor financiare în funcție de schimbările în situația noastră financiară sau prioritățile noastre.
                    {'\n'}
                    De ce este importantă: Ne ajută să fim flexibili și să facem ajustări pentru a ne asigura că gestionăm banii în mod eficient.
                </Text>

                {/* Button */}
                <TouchableOpacity style={styles.button}
                 onPress={() => navigation.navigate("Quiz")}>
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
        textAlign: 'left',
        fontSize: 20,
        fontFamily: 'Arial',
        color: Colors.BLACK,
        marginBottom: 20,
    },
    title: {
        textAlign: 'center',
        fontSize: 50,
        fontFamily: 'Arial-BoldMT',
        color: Colors.BEST,
        marginBottom: 20,
    },
    title1: {
        textAlign: 'center',
        fontSize: 35,
        fontFamily: 'Arial-BoldMT',
        color: Colors.BORDER,
        backgroundColor: Colors.BEST,
        marginBottom: 20,
    },
    titlu: {
        textAlign: 'center',
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
        height: 70,
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
        height: 1300, 
        }, 
});
