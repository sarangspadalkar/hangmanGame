import React from 'react';

const TextEntry = (props) => {
    const alphabetStyle = {
        cursor: 'pointer',
        marginRight: '11px',
        padding: '1px',
        textTransform: 'uppercase',
        fontSize: '22px',
        display: 'inline-block',
        fontFamily: 'Creepster',
        fontStyle: 'italic',
    };
    const disabledAlphabetStyle = {
        cursor: 'none',
        pointerEvents:'none',
        marginRight: '11px',
        padding: '1px',
        textTransform: 'uppercase',
        fontSize: '22px',
        display: 'inline-block',
        fontFamily: 'Creepster',
        fontStyle: 'italic',
        textDecoration: 'line-through',
        opacity:'0.5'
    };
    const divStyle = {
        margin: 'auto',
        width: '50%',
        border: '3px solid black',
        padding: '10px',
        textAlign: 'center'
    }
    const letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
    
    const letterList = letters.map((letter,index) => {
        if (props.guess.includes(letter)) {
            return <li key={index } style={disabledAlphabetStyle}
        onClick={()=>props.clicked(letter)}>{letter}</li>
        } else {
            return <li key={index } style={alphabetStyle}
        onClick={()=>props.clicked(letter)}>{letter}</li>
        }
    });

    return (
        <div style={divStyle}>
            {letterList}
    </div>
        
);

}

export default TextEntry;