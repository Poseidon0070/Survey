let fetchData = async () => {
    let response = await fetch('https://survey-aba0c-default-rtdb.firebaseio.com/questions.json')

    if(!response.ok){
        throw new Error("Failed to fetch!")
    }

    let data = await response.json()
    let numberOfQuestions = 0
    for(let i in data) numberOfQuestions = data[i].length
    let Que = []

    for(let i in data) {
        for(let j=0;j<numberOfQuestions;j++) {
            Que[j] = {
                id : data[i][j].id,
                description : data[i][j].description,
                question : data[i][j].text 
            }
        }
    }

    return Que
}

let submitData = async (answers) => {
    let response = await fetch('https://survey-aba0c-default-rtdb.firebaseio.com/survey.json',{
        method : 'POST',
        body : JSON.stringify(answers)
    })

    if(!response.ok){
        throw new Error("Failed to submit!")
    }
}

export {fetchData,submitData};