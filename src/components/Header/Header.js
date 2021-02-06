import React from 'react'

const Header = () => {
    const style = {
        padding: '20px',
        textAlign: 'center',
        background: 'black',
        color: 'grey',
        fontSize: '56px',
        fontFamily: 'Creepster',
        fontStyle: 'italic',
        margin: 0
    }
    return (

        <h1 style={style}>Hangman Game </h1>

    );
}

export default Header;