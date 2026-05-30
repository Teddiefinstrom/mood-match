
export interface Album {
    id: number;
    title: string;
    artist: string;
    year: number;
    genres: string[];
    albumTags: AlbumTag[];
    description: string;
    coverUrl: string;
}

export type AlbumTag =
  | "happy"
  | "sad"
  | "energetic"
  | "reflective"
  | "nostalgic"
  | "dreamy"
  | "angry"
  | "party"
  | "roadtrip"
  | "late-night"
  | "emotional"
  | "intense"
  | "melancholic";