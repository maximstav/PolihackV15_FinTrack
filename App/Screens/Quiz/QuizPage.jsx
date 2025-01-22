import { View, Text } from 'react-native'
import React, {useState} from 'react'

export default function QuizPage() {
  const [currentAnswerIsCorrect, setCurrentAnswerIsCorrect] = useState(false)
  const questions = [
    {
        q: "asdasdas ?",
        a: [
            {
                a: 'asdsa',
                isCorrect: true
            },
            {
                a: '123',
                isCorrect: false
            },
            {
                a: 'g5g5g5',
                isCorrect: false
            }
        ]
    }
  ]
  const currentQuestion = questions[0]
  return (
    <View>
        <p>currentQuestion.q</p>
        {currentQuestion.a.forEach(answer => {
            return (<p onClick={() => setCurrentAnswerIsCorrect(answer.isCorrect)}>{answer.a}</p>)
        })}
    </View>
  )
}