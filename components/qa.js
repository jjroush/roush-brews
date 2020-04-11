import { useState, useEfffect } from 'react';

function Qa() {
    const [questions, setQuestions] = useState([{
        "q": "example question?",
        "a": "Example Answer."
    }])
    return (
        <div>
            <h1>{'Q & A'}</h1>
            <ul>
                {questions.map(question => (
                    <li>{question.q}
                        <ul>
                            {question.a}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Qa;