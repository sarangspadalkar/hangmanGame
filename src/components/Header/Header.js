import React from 'react'

const Header = () => {
    const style = {
        padding: '20px',
        textAlign: 'center',
        color: 'black',
        fontFamily:'cursive',
        fontSize: '50px',
        margin: 0
    }
    return (

        <h1 style={style}>Hangman Game </h1>

    );
}

export default Header;