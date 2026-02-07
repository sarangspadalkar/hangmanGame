import { useState, useCallback, useEffect } from 'react';
import fetchStates from '../fetchStates';

interface HangmanState {
  currentState: string;
  userGuesses: string[];
  wrongGuessCount: number;
  userCorrectGuesses: string;
  lose: boolean;
  win: boolean;
}

const getInitialState = (): HangmanState => ({
  currentState: '',
  userGuesses: [],
  wrongGuessCount: 0,
  userCorrectGuesses: '',
  lose: false,
  win: false,
});

export function useHangman(): HangmanState & {
  guessLetter: (letter: string) => void;
  newGame: () => void;
} {
  const [state, setState] = useState<HangmanState>(getInitialState);

  const loadNewWord = useCallback(() => {
    const stateList = fetchStates();
    const word = stateList[Math.floor(Math.random() * stateList.length)];
    setState((prev) => ({ ...prev, currentState: word }));
  }, []);

  useEffect(() => {
    loadNewWord();
  }, [loadNewWord]);

  const isWin = useCallback((currentState: string, userCorrectGuesses: string) => {
    const uniqueLetters = [
      ...new Set(currentState.replace(/\s/g, '').split('').sort()),
    ];
    const guessedLetters = [...userCorrectGuesses.split('').sort()];
    if (uniqueLetters.length !== guessedLetters.length) return false;
    return uniqueLetters.every((letter, i) => letter === guessedLetters[i]);
  }, []);

  useEffect(() => {
    if (!state.currentState || state.lose) return;
    setState((prev) => ({
      ...prev,
      win: isWin(prev.currentState, prev.userCorrectGuesses),
    }));
  }, [state.userCorrectGuesses, state.currentState, state.lose, isWin]);

  const guessLetter = useCallback((letter: string) => {
    setState((prev) => {
      if (prev.userGuesses.includes(letter)) return prev;
      const isWrong = !prev.currentState.includes(letter);
      const newWrongCount = isWrong
        ? prev.wrongGuessCount + 1
        : prev.wrongGuessCount;
      const newCorrectGuesses = isWrong
        ? prev.userCorrectGuesses
        : prev.userCorrectGuesses + letter;
      return {
        ...prev,
        userGuesses: [...prev.userGuesses, letter],
        wrongGuessCount: newWrongCount,
        userCorrectGuesses: newCorrectGuesses,
        lose: newWrongCount >= 6,
      };
    });
  }, []);

  const newGame = useCallback(() => {
    const stateList = fetchStates();
    const word = stateList[Math.floor(Math.random() * stateList.length)];
    setState({
      ...getInitialState(),
      currentState: word,
    });
  }, []);

  return {
    ...state,
    guessLetter,
    newGame,
  };
}
