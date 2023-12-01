import classes from './Survey.module.css'

let WelcomePage = (props) => {

    return (
        <div className="monospace d-flex flex-column align-items-center mx-2">
            <p className="h1 mb-5">Welcome to the survey!</p>
            <p className="h5">To begin the survey, please click the button below.</p>
            <div className="d-flex justify-content-center">
                <button className={`btn btn-lg btn-primary mt-3 ${classes.button}`} onClick={props.beginSurvey}>Start</button>
            </div>
        </div>
    )
}

export default WelcomePage;