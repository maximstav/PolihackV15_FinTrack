import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Colors from '../../Utils/Colors';

const SupermarketGame = () => {
  // Define state variables
  const [balance, setBalance] = useState(150); // Starting balance
  const [message, setMessage] = useState('Bine ai venit la magazin');

  // Function to handle buying items
  const buyItem = (cost) => {
    if (balance >= cost) {
      setBalance(balance - cost);
      setMessage(`Ai cumparat un lucru pentru $${cost}`);
    } else {
      setMessage("Nu mai ai destui bani pentru a cumpara acest lucru.");
    }
  };

  // Function to handle restarting the game
  const restartGame = () => {
    setBalance(150);
    setMessage('Bine ai venit la magazin!');
  };

  return (
    <View style={styles.container}>
        
      <Text style={styles.balance}>Sumă disponibilă: ${balance}</Text>
      <Text style={styles.message}>{message}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Cumpără Telefon ($100)" onPress={() => buyItem(100)} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Cumpără un Joc ($35)" onPress={() => buyItem(35)} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Cumpără Flori ($15)" onPress={() => buyItem(15)} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Cumpără o carte ($30)" onPress={() => buyItem(30)} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Cumpără mancare ($25)" onPress={() => buyItem(25)} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Cumpără suc ($25)" onPress={() => buyItem(25)} />
      </View>
      <Button title="Mai încearcă o dată" onPress={restartGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  balance: {
    textAlign: 'center',
    fontSize: 35,
    fontFamily: 'Arial-BoldMT',
    color: Colors.BORDER,
    marginBottom: 20,
  },
  message: {
    marginBottom: 20,
    fontSize:25,
    textAlign:'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: Colors.BEST,
    width: '80%',
    marginBottom: 10,
  },
  
});

export default SupermarketGame;
