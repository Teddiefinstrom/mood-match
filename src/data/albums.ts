import type { Album } from "../types/Album";

export const albums: Album[] = [
  {
    id: 1,
    title: "Rumours",
    artist: "Fleetwood Mac",
    year: 1977,
    genres: ["Rock", "Pop"],
    albumTags: ["nostalgic", "happy", "roadtrip"],
    description:
      "A timeless classic filled with catchy melodies and emotional storytelling.",
    coverUrl: "/covers/rumours.jpg",
  },
  {
    id: 2,
    title: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    year: 1973,
    genres: ["Progressive Rock"],
    albumTags: ["reflective", "late-night"],
    description:
      "An immersive journey through life, time, and human emotions.",
    coverUrl: "/covers/dark-side.jpg",
  },
  {
    id: 3,
    title: "Abbey Road",
    artist: "The Beatles",
    year: 1969,
    genres: ["Rock"],
    albumTags: ["happy", "nostalgic"],
    description:
      "One of the most beloved albums ever made, packed with iconic songs.",
    coverUrl: "/covers/abbey-road.jpg",
  },
  {
    id: 4,
    title: "Blonde",
    artist: "Frank Ocean",
    year: 2016,
    genres: ["R&B", "Alternative"],
    albumTags: ["sad", "reflective", "late-night"],
    description:
      "Dreamy, emotional, and deeply personal.",
    coverUrl: "/covers/blonde.jpg",
  },
  {
    id: 5,
    title: "To Pimp a Butterfly",
    artist: "Kendrick Lamar",
    year: 2015,
    genres: ["Hip-Hop", "Jazz Rap"],
    albumTags: ["reflective", "intense", "intense"],
    description:
      "A groundbreaking album exploring identity, society, and ambition.",
    coverUrl: "/covers/tpab.jpg",
  },
  {
    id: 6,
    title: "Back to Black",
    artist: "Amy Winehouse",
    year: 2006,
    genres: ["Soul", "R&B"],
    albumTags: ["sad", "emotional", "melancholic"],
    description:
      "Raw emotion wrapped in unforgettable melodies.",
    coverUrl: "/covers/back-to-black.jpg",
  },
  {
    id: 7,
    title: "Random Access Memories",
    artist: "Daft Punk",
    year: 2013,
    genres: ["Electronic", "Disco"],
    albumTags: ["energetic", "happy", "party"],
    description:
      "A celebration of groove, nostalgia, and dance music.",
    coverUrl: "/covers/ram.jpg",
  },
  {
    id: 8,
    title: "Nevermind",
    artist: "Nirvana",
    year: 1991,
    genres: ["Grunge", "Alternative Rock"],
    albumTags: ["angry", "energetic"],
    description:
      "A defining album of the 90s with raw energy and emotion.",
    coverUrl: "/covers/nevermind.jpg",
  },
  {
    id: 9,
    title: "21",
    artist: "Adele",
    year: 2011,
    genres: ["Pop", "Soul"],
    albumTags: ["sad", "emotional"],
    description:
      "A powerful album about love, loss, and moving forward.",
    coverUrl: "/covers/21.jpg",
  },
  {
    id: 10,
    title: "Currents",
    artist: "Tame Impala",
    year: 2015,
    genres: ["Psychedelic Pop", "Indie"],
    albumTags: ["dreamy", "reflective", "late-night"],
    description:
      "A modern classic full of lush sounds and introspection.",
    coverUrl: "/covers/currents.jpg",
  },
];