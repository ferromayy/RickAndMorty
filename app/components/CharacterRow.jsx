import React from "react";

const CharacterRow = ({ character }) => {
  return (
    <div>
      <p>{character?.id}</p>
      <p>{character?.name}</p>
      <p>{character?.status}</p>
      <p>{character?.species}</p>
    </div>
  );
};

export default CharacterRow;
