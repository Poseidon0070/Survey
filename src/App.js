import WelcomePage from "./components/WelcomePage";
import { useState } from "react";
import Survey from './components/Survey'
import './App.css'
import EndScreen from "./components/EndScreen";

let App = () => {

  let [surveyStarted, setSurvey] = useState(false)
  let [endScreen, setEndScreen] = useState(false)

  let beginSurvey = () => {
    setTimeout(() => {
      setSurvey(true)
    },200)
  }

  return (
    <div className="box">
      <div>
        {!surveyStarted && !endScreen && <WelcomePage beginSurvey={beginSurvey}/>}
        {surveyStarted && !endScreen && <Survey endScreen={setEndScreen}  beginSurvey={setSurvey}/>}
        {endScreen && <EndScreen />}
      </div>
    </div>
  )
}

export default App; 