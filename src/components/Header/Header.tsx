import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Hangman</h1>
      <p className={styles.header__subtitle}>
        Guess the US state — one letter at a time
      </p>
    </header>
  );
}
