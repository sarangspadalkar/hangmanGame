import React from 'react';
import styles from './CorrectGuessList.module.css';

function CorrectGuessList({ currentState, guess, lose, win }) {
  const showAnswer = lose || win;

  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>
        {showAnswer ? (win ? 'Correct!' : 'The answer') : 'Guess the state'}
      </p>
      <div
        className={styles.word}
        role="text"
        aria-label={currentState || 'Loading…'}
      >
        {currentState.split('').map((char, index) => {
          if (char === ' ') {
            return <span key={`${index}-space`} className={styles.space} />;
          }
          const revealed = showAnswer || guess.includes(char);
          return (
            <span
              key={`${index}-${char}`}
              className={`${styles.letter} ${revealed ? styles.letterRevealed : ''}`}
            >
              {revealed ? char : ''}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default CorrectGuessList;
