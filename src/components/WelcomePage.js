let WelcomePage = (props) => {

    return (
        <div className="container">
            <p className="h2">Welcome to the survey!</p>
            <p>Click below to begin the survey</p>
            <button className="btn btn-primary" onClick={props.beginSurvey}>Start</button>
        </div>
    )
}

export default WelcomePage;