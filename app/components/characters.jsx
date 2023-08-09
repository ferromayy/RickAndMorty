import React from "react";
import CharacterRow from "./CharacterRow";
const CharacterTable = ({ characters }) => {
  return (
    <div>
      { characters.map((character) => (
          <CharacterRow key={character.id} character={character} />
        ))}
    </div>
  );
};

export default CharacterTable;
