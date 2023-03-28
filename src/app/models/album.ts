import { Music } from "./music";

export interface Album {
  _id: string;
  name: string;
  owner: string;
  musics: Music[];
  link: string;
}
