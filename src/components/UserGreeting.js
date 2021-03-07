import React from 'react'

function UserGreeting(props) {
    return (
        <div>
            {props.correct >= 2 && (
            <div>
                <h3>Thank you for completing the quiz!</h3>
                <h2 className='pass'>You have passed this quiz, you scored:</h2>
                <p className='scoreCorrect'>Correct: {props.correct}</p>
                <p className='scoreInCorrect'>Incorrect: {props.inCorrect}</p>
            </div>
            )}
            {props.inCorrect >= 2 && (
            <div>
                <h3>Thank you for completing the quiz!</h3>
                <h2 className='fail'>You failed this quiz, your scored:</h2>
                <p className='scoreCorrect'>Correct: {props.correct}</p>
                <p className='scoreInCorrect'>Incorrect: {props.inCorrect}</p>
            </div>
            )}
        </div>
    )
}

export default UserGreeting
