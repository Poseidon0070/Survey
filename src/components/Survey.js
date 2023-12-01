import { useEffect, useState } from "react"
import Questions from "./Questions"
import {fetchData,submitData} from "./data"
import classes from "./Survey.module.css"
let Ques = [
    { id: 1, text: 'How satisfied are you with our products?', description : {type: 'number',max:'5'} },
    { id: 2, text: 'How fair are the prices compared to similar retailers?', description : {type: 'number',max:'5'} },
    { id: 3, text: 'How satisfied are you with the value for money of your purchase?', description : {type: 'number',max:'5'} },
    { id: 4, text: 'On a scale of 1-10 how would you recommend us to your friends and family?', description : {type: 'number', max:'10'} },
    { id: 5, text: 'What could we do to improve our service?', description : {type: 'text'} }
]


console.log(Ques)
let Que = []

let Survey = (props) => {
    let [questionNumber, setQuestionNumber] = useState(0)
    let [answer, setAnswer] = useState({})
    let [questionsFetched, setQuestionsFetched] = useState(false);
    let totalQuestion = Que.length
    let submissionValid = Object.keys(answer).length === totalQuestion ? true : false

    useEffect(() => {
        const fetchQuestions = async () => {
          try {
            Que = await fetchData();
            setQuestionsFetched(true);
          } catch (error) {
            console.error("Error fetching questions:", error.message);
          }
        };
    
        fetchQuestions();
      }, []);

    let nextQuestion = () => {
        if(questionNumber === totalQuestion - 1) {
            return ;
        }
        setTimeout(() => {
            setQuestionNumber((state) => state + 1)
        },200)
    }

    let previousQuestion = () => {
        if(questionNumber === 0) {
            return ;
        }
        setTimeout(() => {
            setQuestionNumber((state) => state - 1)
        },200)
    }

    let onAnswer = (res) => {
        setAnswer((state) => {
            return {...state, [questionNumber] : res}
        })
    }
    // console.log(answer)
    let submitHandler = async (event) => {
        event.preventDefault()
        await submitData(answer)
        .then(() => {
            setTimeout(() => {
                props.endScreen(true)
            },500)
            setTimeout(() => {
                props.endScreen(false)
                props.beginSurvey(false)
            },5500)
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

    if (!questionsFetched) {
        return <div>Loading...</div>;
    }

    return (
        <div className={classes.question}>
            <div>
                <div className="d-flex justify-content-center">
                    <span className="fs-3 me-4 mb-3">Question : {questionNumber+1}/{totalQuestion}</span>
                </div>
                <Questions question={Que[questionNumber]} onAnswer={onAnswer} answers={answer}/>
            </div>
            <div className="mt-5">
                <button className={`btn btn-lg btn-primary ${classes.btn_prev} ${classes.button}`} onClick={previousQuestion}>
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="40" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                </svg>
                </button>
                <button className={`btn btn-lg btn-primary ${classes.btn_next} ${classes.button}`} onClick={nextQuestion}>
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="40" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                </svg>
                </button>
            </div>
            <div>
                <button className={`btn btn-lg btn-success ${classes.btn_submit}`} style={{height:"60px"}} onClick={submitHandler} disabled={!submissionValid}>Submit</button>
            </div>
        </div>
    )
}

export default Survey;