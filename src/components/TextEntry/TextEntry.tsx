import React from 'react';
import styles from './TextEntry.module.css';

const QWERTY_ROWS = [
  'QWERTYUIOP'.split(''),
  'ASDFGHJKL'.split(''),
  'ZXCVBNM'.split(''),
];

type LetterStatus = 'available' | 'correct' | 'wrong';

function getLetterStatus(
  letter: string,
  guess: string[],
  word: string
): LetterStatus {
  if (!guess.includes(letter)) return 'available';
  return word.includes(letter) ? 'correct' : 'wrong';
}

function getKeyClassName(status: LetterStatus): string {
  const base = styles.key;
  if (status === 'correct') return `${base} ${styles.keyCorrect}`;
  if (status === 'wrong') return `${base} ${styles.keyWrong}`;
  return base;
}

interface TextEntryProps {
  guess: string[];
  word: string;
  onLetterClick: (letter: string) => void;
}

export default function TextEntry({
  guess,
  word,
  onLetterClick,
}: TextEntryProps) {
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
                className={getKeyClassName(status)}
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
