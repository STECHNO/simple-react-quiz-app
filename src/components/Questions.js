import React from 'react'

function Questions(props) {

    for (let i = 0; i < props.data.length; i++){
        return <h3>{props.data[props.q].question}</h3>
    }

}

export default Questions
