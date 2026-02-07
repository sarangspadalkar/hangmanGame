import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Hangman from './components/Hangman/Hangman';
import TextEntry from './components/TextEntry/TextEntry';
import CorrectGuessList from './components/CorrectGuessList/CorrectGuessList';
import GameOver from './components/GameOver/GameOver';
import { useHangman } from './hooks/useHangman';
import './App.css';

function App() {
  const {
    currentState,
    userGuesses,
    wrongGuessCount,
    lose,
    win,
    guessLetter,
    newGame,
  } = useHangman();

  const gameOver = lose || win;

  useEffect(() => {
    if (gameOver) return;
    const handleKeyDown = (e) => {
      const key = e.key?.toUpperCase();
      if (
        key.length === 1 &&
        key >= 'A' &&
        key <= 'Z' &&
        !userGuesses.includes(key)
      ) {
        e.preventDefault();
        guessLetter(key);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameOver, userGuesses, guessLetter]);

  return (
    <div className="app">
      <div className="app__inner">
        <Header />
        <main className="app__card">
          <section className="app__game-section" aria-label="Game">
            <Hangman wrongCount={wrongGuessCount} win={win} lose={lose} />
            <CorrectGuessList
              currentState={currentState}
              guess={userGuesses}
              lose={lose}
              win={win}
            />
            {!gameOver && (
              <TextEntry
                guess={userGuesses}
                word={currentState}
                onLetterClick={guessLetter}
              />
            )}
          </section>
        </main>
      </div>
      {gameOver && (
        <GameOver win={win} answer={currentState} onPlayAgain={newGame} />
      )}
    </div>
  );
}

export default App;
