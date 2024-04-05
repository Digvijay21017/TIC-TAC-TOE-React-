import React from "react";
import { useState } from "react";

export default function Player({ initialName, symbol ,isActive , onChangeName}) {
  const [isEditing, setIsEditing] = useState(false);

  const [playerName, setPlayerName] = useState(initialName);

  const handleEditing = () => {
    setIsEditing((editing) => !editing);
    if(isEditing)
    {
      onChangeName(symbol , playerName);
    }
  };

  function handleChange(event)
  {
    setPlayerName(event.target.value);
  }

  let playerNameTag = <span className="player-name">{playerName}</span>;
  let button = "Edit";

  if (isEditing) {
    playerNameTag = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleChange}
      ></input>
    );
    button = "Save";
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {playerNameTag}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditing}>{button}</button>
    </li>
  );
}
