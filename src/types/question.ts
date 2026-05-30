import type { AlbumTag } from "./Album";

export interface Question {
    id: number;
    question: string;
    options: Option[];
}

export interface Option {
    text: string;
    moods: Mood[];
    albumTags: AlbumTag[];
}

export type Mood =
  | "happy"
  | "sad"
  | "energetic"
  | "reflective"
  | "nostalgic"
  | "dreamy"
  | "angry";
