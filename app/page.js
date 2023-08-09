import Image from "next/image";

import FilterableCharactersTable from "./components/FilterableCharactersTable";

// const characters = [
//   {
//     id: 1,
//     name: "Rick Sanchez",
//     status: "Alive",
//     species: "Human",
//   },
//   {
//     id: 2,
//     name: "Morty Smith",
//     status: "Alive",
//     species: "Human",
//   },
//   {
//     id: 3,
//     name: "Summer Smith",
//     status: "Alive",
//     species: "Human",
//   },
//   {
//     id: 4,
//     name: "Beth Smith",
//     status: "Alive",
//     species: "Human",
//   },
//   {
//     id: 5,
//     name: "Jerry Smith",
//     status: "Alive",
//     species: "Human",
//   },
//   {
//     id: 6,
//     name: "Abadango Cluster Princess",
//     status: "Alive",
//     species: "Alien",
//   },
//   {
//     id: 13,
//     name: "Alien Googah",
//     status: "unknown",
//     species: "Alien",
//   },
//   {
//     id: 16,
//     name: "Amish Cyborg",
//     status: "Dead",
//     species: "Alien",
//   },
// ];

async function fetchRickAndMorty() {
  const res = await fetch("https://rickandmortyapi.com/api/character/");
  const data = await res.json();
  // console.log(data, "hlisss");
  return data.results;
}

async function home() {
  const newData = await fetchRickAndMorty();
  return (
    <>
      <FilterableCharactersTable characters={newData} />
    </>
  );
}

export default home;
