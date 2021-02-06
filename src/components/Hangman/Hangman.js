import React from 'react'

const Hangman = (props) => {
    const style = {
        padding: '30px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '700px',
        height: '250px'
    };
    let imgPath = '';
    if (props.win) {
        imgPath = require('../../assets/win.png');
    }else if (!props.lose ) { 
        imgPath = require('../../assets/' + props.currentDiagram + '.png');
    } else {
        imgPath = require('../../assets/lose.png');
    }
    return (
        <img style={style}
            src={imgPath} 
            alt="Hangman"
            
        />

    );
}

export default Hangman;