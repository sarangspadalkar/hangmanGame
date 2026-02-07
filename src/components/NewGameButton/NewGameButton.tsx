import React from 'react';

interface NewGameButtonProps {
  onNewGame: () => void;
}

export default function NewGameButton({ onNewGame }: NewGameButtonProps) {
  return (
    <div className="new-game-wrapper">
      <button type="button" className="new-game-button" onClick={onNewGame}>
        New Game
      </button>
    </div>
  );
}
