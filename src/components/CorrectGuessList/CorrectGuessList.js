import React from 'react';

const CorrectGuessList = (props) => {
    const alphabetStyle = {
        marginRight: '11px',
        padding: '1px',
        textTransform: 'uppercase',
        fontSize: '22px',
        display: 'inline-block',
        fontFamily:'cursive',
        fontStyle: 'italic',
    };
    const divStyle = {
        margin: 'auto',
        width: '50%',
        padding: '10px',
        textAlign: 'center'
    }
    const stateletters = props.currentState.split('');
    
    const stateletterList = stateletters.map((letter,index) => {
        if (props.lose) {
            return <li key={index} style={alphabetStyle}><u>{letter}</u></li>
        } else {
            if (letter === ' ') {
                return <li key={index} style={alphabetStyle}>&nbsp;&nbsp;</li>
            } else {
                if (props.guess.includes(letter)) {
                    return <li key={index} style={alphabetStyle}><u>{letter}</u></li>
                }
                else {
                    return <li key={index} style={alphabetStyle}><u>&nbsp;&nbsp;&nbsp;</u></li>
                }
            }
        }
    });

    const displayText = (!props.lose) ? 'Guess the US State' : 'Correct Answer';
    return (
        <div style={divStyle}>
            <h3 style={{fontFamily:'cursive'}}>{displayText}</h3>
            {stateletterList}
    </div>
        
);

}

export default CorrectGuessList;