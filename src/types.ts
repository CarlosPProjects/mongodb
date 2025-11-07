import { ObjectId } from "mongodb";

interface Ranking {
  current: number;
  points: number;
  tour: string;
}

interface Bio {
  birthplace: string;
  birthdate: string;
  height_cm: number;
  residence: string;
  hand: string;
}

interface Season {
  year: number;
  matches: number;
  wins: number;
  losses: number;
  win_rate: number;
  titles: number;
  finals: number;
}

interface Totals {
  matches: number;
  wins: number;
  losses: number;
  win_rate: number;
  streak: number;
}

interface Career {
  totals: Totals;
  seasons: Season[];
}

export interface Player {
  _id: ObjectId;
  name: string;
  partner: string;
  circuit: string;
  ranking: Ranking;
  bio: Bio;
  career: Career;
}
