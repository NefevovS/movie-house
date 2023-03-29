import axios from "axios";

export class FilmServise {
  static async getAll() {
    return await axios("https://yts.mx/api/v2/list_movies.json");
  }
}