import axios from "axios";

export class FilmServise {
  static async getAll(page = 1, limit = 12, query_term = "") {
    return await axios("https://yts.mx/api/v2/list_movies.json", {
      params: {
        limit,
        page,
        query_term,
      },
    });
  }
  static async getFilmByID(id) {
    return await axios(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
  }
  static async getSuggestionsFilmByID(id) {
    return await axios(
      `https://yts.mx/api/v2/movie_suggestions.json?movie_id=${id}`
    );
  }
  static async getFilmsByFIlters(
    page = 1,
    limit = 12,
    query_term = "",
    genre = "",
    quality = "",
    minimum_rating = ""
  ) {
    return await axios(`https://yts.mx/api/v2/list_movies.json`, {
      params: {
        limit,
        page,
        query_term,
        genre,
        quality,
        minimum_rating,
      },
    });
  }
}
