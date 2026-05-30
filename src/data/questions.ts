import type { Question } from "../types/question";

export const questions: Question[] = [
  {
    id: 1,
    question: "How are you feeling right now?",
    options: [
      {
        text: "Happy and optimistic",
        moods: ["happy"],
        albumTags: ["happy", "energetic"],
      },
      {
        text: "A little emotional",
        moods: ["sad"],
        albumTags: ["sad", "emotional"],
      },
      {
        text: "Lost in thought",
        moods: ["reflective"],
        albumTags: ["reflective", "late-night"],
      },
      {
        text: "Frustrated or angry",
        moods: ["angry"],
        albumTags: ["angry", "intense"],
      },
    ],
  },
  {
    id: 2,
    question: "What do you want music to do for you?",
    options: [
      {
        text: "Give me energy",
        moods: ["energetic"],
        albumTags: ["energetic", "party"],
      },
      {
        text: "Help me process emotions",
        moods: ["sad"],
        albumTags: ["sad", "emotional"],
      },
      {
        text: "Make me think",
        moods: ["reflective"],
        albumTags: ["reflective"],
      },
      {
        text: "Let me escape reality",
        moods: ["dreamy"],
        albumTags: ["dreamy", "late-night"],
      },
    ],
  },
  {
    id: 3,
    question: "Where are you listening to music?",
    options: [
      {
        text: "On a drive",
        moods: ["nostalgic"],
        albumTags: ["roadtrip", "nostalgic"],
      },
      {
        text: "At a party",
        moods: ["happy"],
        albumTags: ["party", "happy"],
      },
      {
        text: "Alone at home",
        moods: ["reflective"],
        albumTags: ["reflective", "late-night"],
      },
      {
        text: "While walking around the city",
        moods: ["dreamy"],
        albumTags: ["dreamy", "energetic"],
      },
    ],
  },
  {
    id: 4,
    question: "What kind of atmosphere are you looking for?",
    options: [
      {
        text: "Warm and nostalgic",
        moods: ["nostalgic"],
        albumTags: ["nostalgic", "roadtrip"],
      },
      {
        text: "Dark and emotional",
        moods: ["sad"],
        albumTags: ["sad", "emotional"],
      },
      {
        text: "Dreamy and immersive",
        moods: ["dreamy"],
        albumTags: ["dreamy", "late-night"],
      },
      {
        text: "Raw and intense",
        moods: ["angry"],
        albumTags: ["angry", "intense"],
      },
    ],
  },
  {
    id: 5,
    question: "Choose one word:",
    options: [
      {
        text: "Joy",
        moods: ["happy"],
        albumTags: ["happy", "party"],
      },
      {
        text: "Reflection",
        moods: ["reflective"],
        albumTags: ["reflective"],
      },
      {
        text: "Longing",
        moods: ["sad"],
        albumTags: ["sad", "emotional"],
      },
      {
        text: "Adventure",
        moods: ["energetic"],
        albumTags: ["energetic", "roadtrip"],
      },
    ],
  },
];