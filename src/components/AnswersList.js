import React from 'react'

function AnswersList(props) {
    let arr = [];
    for (let j = 0; j < props.data[props.q].options.length; j++) {
        arr.push(props.data[props.q].options[j])
    }
    const answer = (i) => {
        i === props.data[props.q].correct ? props.getAnswer(true) : props.getAnswer(false);
    }
    return (
        <div>{arr.map((v, i) => {
            return (
                <div key={i}>
                    <button className='AnswerBtn' onClick={() => answer(i)} > {v} </button>
                    <br />
                </div>
            )
        })}</div>
    )

}

export default AnswersList;


 