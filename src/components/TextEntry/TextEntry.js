import React from 'react';
import styles from './TextEntry.module.css';

const QWERTY_ROWS = [
  'QWERTYUIOP'.split(''),
  'ASDFGHJKL'.split(''),
  'ZXCVBNM'.split(''),
];

function getLetterStatus(letter, guess, word) {
  if (!guess.includes(letter)) return 'available';
  return word.includes(letter) ? 'correct' : 'wrong';
}

function TextEntry({ guess, word, onLetterClick }) {
  return (
    <div className={styles.wrapper} role="group" aria-label="Choose a letter">
      {QWERTY_ROWS.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((letter) => {
            const status = getLetterStatus(letter, guess, word);
            return (
              <button
                key={letter}
                type="button"
                className={`${styles.key} ${styles[`key${status.charAt(0).toUpperCase() + status.slice(1)}`]}`}
                onClick={() => onLetterClick(letter)}
                disabled={status !== 'available'}
                aria-label={
                  status === 'available'
                    ? `Guess ${letter}`
                    : `${letter} already ${status}`
                }
              >
                {letter}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default TextEntry;
