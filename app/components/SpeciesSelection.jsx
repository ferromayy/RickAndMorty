import React from "react";

export default function SpeciesSelection({ selectSpecies, selectedSpecies }) {
  return (
    <div>
      <div>
        <label>Select Species:</label>
        <select
          value={selectedSpecies}
          onChange={(e) => selectSpecies(e.target.value)}
        >
          <option value="">All</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
        </select>
      </div>
    </div>
  );
}
