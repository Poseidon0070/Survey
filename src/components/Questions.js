import { useRef } from "react";
import Input from "./input-hook/Input";

let Questions = (props) => {
    return (
        <div>
            <Input 
                id={props.question.id} 
                question={props.question.text} 
                description={props.question.description}
                onAnswer={props.onAnswer}>
            </Input>
        </div>
    )
}

export default Questions;