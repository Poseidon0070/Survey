import Input from "./Input";

let Questions = (props) => {
    return (
        <div>
            <Input 
                id={props.question.id} 
                question={props.question.question} 
                description={props.question.description}
                onAnswer={props.onAnswer}
                answers={props.answers}>
            </Input>
        </div>
    )
}

export default Questions;