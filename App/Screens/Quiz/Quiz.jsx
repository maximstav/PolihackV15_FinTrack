import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import shuffle from 'lodash/shuffle'
import Colors from '../../Utils/Colors'

// Import your JSON file containing questions
import questionsData from './quiz.json'

export default function Quiz({navigation}) {
  const [currentAnswerIsCorrect, setCurrentAnswerIsCorrect] = useState(false);

  // Shuffle the questions array to randomize the order
  const shuffledQuestions = shuffle(questionsData);

  // State to track the current question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Function to handle user selection of an answer
  const handleAnswerClick = (isCorrect) => {
    setCurrentAnswerIsCorrect(isCorrect);
    // Move to the next question
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    if(currentQuestionIndex === shuffledQuestions.length-1){
      navigation.navigate('Lection1')
    }
  };

  // Get the current question
  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{currentQuestion.q}</Text>
      {currentQuestion.a.map((answer, index) => (
        <TouchableOpacity style={styles.button} onPress={() => handleAnswerClick(answer.isCorrect) }>
            <Text style={styles.raspuns} key={index} >
            {answer.a}
            </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
    question:{
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    raspuns:{
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingHorizontal: 20,
  },
    button:{padding:10,
        backgroundColor:Colors.BEST,
        borderRadius: 10,
        marginTop:50,
        width:300,
        height:120,
        alignSelf:2,
        borderWidth: 3, 
        borderColor: Colors.BORDER,

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },

})