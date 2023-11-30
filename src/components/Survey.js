import { useState } from "react"
import Questions from "./Questions"

let Que = [
    { id: 1, text: 'How satisfied are you with our products?', description : {type: 'number',min:'1', max:'5', step:'1'} },
    { id: 2, text: 'How fair are the prices compared to similar retailers?', description : {type: 'number',min:'1', max:'5', step:'1'} },
    { id: 3, text: 'How satisfied are you with the value for money of your purchase?', description : {type: 'number',min:'1', max:'5', step:'1'} },
    { id: 4, text: 'On a scale of 1-10 how would you recommend us to your friends and family?', description : {type: 'number',min:'1', max:'10', step:'1'} },
    { id: 5, text: 'What could we do to improve our service?', description : {type: 'text'} }
]

let Survey = () => {
    let [questionNumber, setQuestionNumber] = useState(0)
    let [answer, setAnswer] = useState({})
    let totalQuestion = Que.length
    let submisionValid = Object.keys(answer).length === totalQuestion ? true : false

    let nextQuestion = () => {
        if(questionNumber === totalQuestion - 1) {
            return ;
        }
        setQuestionNumber((state) => state + 1)
    }

    let previousQuestion = () => {
        if(questionNumber === 0) {
            return ;
        }
        setQuestionNumber((state) => state - 1)
    }

    let onAnswer = (res) => {
        setAnswer((state) => {
            return {...state, [questionNumber] : res}
        })
    }
    // console.log(answer)
    let submitHandler = () => {
        
    }

    return (
        <div className="container">
            <h1>Question {questionNumber+1} of {totalQuestion}</h1>
            <Questions question={Que[questionNumber]} onAnswer={onAnswer} />
            <button className="btn btn-primary" onClick={previousQuestion}>Previous</button>
            <button className="btn btn-primary" onClick={nextQuestion}>Next</button>
            <button className="btn btn-primary" onClick={submitHandler} disabled={!submisionValid}>Submit</button>
        </div>
    )
}

export default Survey;