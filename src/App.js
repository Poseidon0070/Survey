import WelcomePage from "./components/WelcomePage";
import { useState } from "react";
import Survey from './components/Survey'


let App = () => {

  let [surveyStarted, setSurvey] = useState(false)

  let beginSurvey = () => {
    setSurvey(true)
  }

  return (
    <>
      {!surveyStarted && <WelcomePage beginSurvey={beginSurvey}/>}
      {surveyStarted && <Survey />}
    </>
  )
}

export default App; 