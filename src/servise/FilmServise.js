import axios from "axios";

export class FilmServise {
  static async getAll() {
    return await axios("https://yts.mx/api/v2/list_movies.json");
  }
  static async getFilmByID(id) {
    return await axios(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
  }
  static async getSuggestionsFilmByID(id) {
    return await axios(
      `https://yts.mx/api/v2/movie_suggestions.json?movie_id=${id}`)
        }

}
