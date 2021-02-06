import React from 'react';

const NewGameButton = (props) => {
    const divStyle = {
        margin: 'auto',
        padding: '10px',
        textAlign: 'center'
    }
    const buttonStyle = {
        backgroundColor: 'black', 
        borderRadius:'2em',
        border:'none',
        padding: '12px 20px',
        textAlign: 'center',
        display: 'inline-block',
        fontSize: '16px',
        fontFamily: 'cursive',
        color:'white'
    }
    return (
        <div style={divStyle}>
            <button style={buttonStyle}
            onClick={props.clicked}>New Game</button>
        </div>
    );
    
}

export default NewGameButton;