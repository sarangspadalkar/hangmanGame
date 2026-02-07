import React from 'react';

function NewGameButton({ onNewGame }) {
  return (
    <div className="new-game-wrapper">
      <button type="button" className="new-game-button" onClick={onNewGame}>
        New Game
      </button>
    </div>
  );
}

export default NewGameButton;
