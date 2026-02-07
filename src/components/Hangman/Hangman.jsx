import React from 'react';
import styles from './Hangman.module.css';

function Hangman({ wrongCount, win, lose }) {
  const lives = 6 - wrongCount;
  const showPart = (showFrom) => wrongCount >= showFrom;
  const isRevealed = win || lose;

  return (
    <div className={styles.wrapper}>
      <div className={styles.lives} aria-live="polite">
        <span className={styles.livesLabel}>Lives</span>
        <span className={styles.livesCount} data-low={lives <= 2}>
          {lives}
        </span>
      </div>
      <div className={styles.figure} aria-hidden>
        <svg
          viewBox="0 0 200 220"
          className={styles.svg}
          role="img"
          aria-label={
            win
              ? 'You won!'
              : lose
                ? 'Game over'
                : `${wrongCount} wrong guesses`
          }
        >
          <g className={styles.gallows}>
            <line x1="20" y1="200" x2="180" y2="200" strokeWidth="4" />
            <line x1="60" y1="200" x2="60" y2="20" strokeWidth="4" />
            <line x1="60" y1="20" x2="140" y2="20" strokeWidth="4" />
            <line x1="140" y1="20" x2="140" y2="45" strokeWidth="3" />
          </g>

          {(wrongCount >= 1 || isRevealed) && (
            <line
              x1="140"
              y1="45"
              x2="140"
              y2="65"
              className={styles.rope}
              strokeWidth="2"
            />
          )}

          {(showPart(1) || (win && wrongCount === 0)) && (
            <g className={styles.part}>
              <circle cx="140" cy="82" r="18" fill="none" strokeWidth="3" />
              {lose && wrongCount >= 6 && (
                <>
                  <line x1="132" y1="78" x2="138" y2="84" strokeWidth="2" />
                  <line x1="138" y1="78" x2="132" y2="84" strokeWidth="2" />
                  <line x1="142" y1="78" x2="148" y2="84" strokeWidth="2" />
                  <line x1="148" y1="78" x2="142" y2="84" strokeWidth="2" />
                </>
              )}
              {win && (
                <path
                  d="M 130 88 Q 140 98 150 88"
                  fill="none"
                  strokeWidth="2"
                  className={styles.smile}
                />
              )}
            </g>
          )}

          {showPart(2) && (
            <line
              x1="140"
              y1="100"
              x2="140"
              y2="155"
              className={styles.part}
              strokeWidth="3"
            />
          )}
          {showPart(3) && (
            <line
              x1="140"
              y1="115"
              x2="110"
              y2="135"
              className={styles.part}
              strokeWidth="3"
            />
          )}
          {showPart(4) && (
            <line
              x1="140"
              y1="115"
              x2="170"
              y2="135"
              className={styles.part}
              strokeWidth="3"
            />
          )}
          {showPart(5) && (
            <line
              x1="140"
              y1="155"
              x2="115"
              y2="195"
              className={styles.part}
              strokeWidth="3"
            />
          )}
          {showPart(6) && (
            <line
              x1="140"
              y1="155"
              x2="165"
              y2="195"
              className={styles.part}
              strokeWidth="3"
            />
          )}
        </svg>
      </div>
    </div>
  );
}

export default Hangman;
