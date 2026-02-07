import React from 'react';
import styles from './GameOver.module.css';

function GameOver({ win, answer, onPlayAgain }) {
  return (
    <div className={styles.overlay} role="status" aria-live="polite">
      <div className={styles.card} data-win={win}>
        <div className={styles.icon} aria-hidden>
          {win ? '🎉' : '💀'}
        </div>
        <h2 className={styles.title}>{win ? 'You got it!' : 'Out of lives'}</h2>
        <p className={styles.answer}>
          {win ? (
            answer
          ) : (
            <>
              The answer was <strong>{answer}</strong>
            </>
          )}
        </p>
        <button
          type="button"
          className={styles.button}
          onClick={onPlayAgain}
          autoFocus
        >
          Play again
        </button>
      </div>
    </div>
  );
}

export default GameOver;
