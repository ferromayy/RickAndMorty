"use client";
import React, { useState } from "react";
import SpeciesSelection from "./SpeciesSelection"; 
import CharacterTable from "./characters";
const FilterableCharactersTable = ({ characters }) => {
  const [selectedSpecies, setSelectedSpecies] = useState(undefined);

  const handleSpeciesSelection = (species) => {
    setSelectedSpecies(species);
  };

  const filteredCharacters = selectedSpecies
    ? characters.filter((character) => character.species === selectedSpecies)
    : characters;

  return (
    <div>
      <SpeciesSelection
        selectedSpecies={selectedSpecies}
        selectSpecies={handleSpeciesSelection}
      />
      <CharacterTable characters={filteredCharacters} />
    </div>
  );
};

export default FilterableCharactersTable;
