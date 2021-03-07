import React, { useState } from 'react';
import Data from '../api/data';
import Questions from './Questions';
import AnswersList from './AnswersList';
import Correct from './Correct';
import InCorrect from './InCorrect';
import Greeting from './UserGreeting';
import ScoreArea from './ScoreArea';
import './Quiz.css'

function Quiz() {
    const [q, setQ] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [inCorrect, setInCorrect] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    const getAnswer = (answer) => {
        console.log(answer);
        answer === true ? setCorrect(correct + 1) : setInCorrect(inCorrect + 1);
        if (q === Data.length - 1) {
            setIsFinished(true);
        }
        else {
            setQ(q + 1)
        }
    }

    return (
        <div>
            <h1>Javascript Quiz</h1>
            {isFinished != true && (
                <div>
                    <Questions data={Data} q={q} />
                    <AnswersList data={Data} q={q} getAnswer={getAnswer} />
                    <div className='ScoreArea'>
                        <ScoreArea />
                        <Correct correct={correct} />
                        <InCorrect inCorrect={inCorrect} />
                    </div>
                </div>
            )}
            {isFinished && (
                <Greeting correct={correct} inCorrect={inCorrect} />
            )}
        </div>
    )
}

export default Quiz
