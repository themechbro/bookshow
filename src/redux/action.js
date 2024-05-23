import axios from "axios";

const headers = new Headers();
headers.append(
  "x-rapidapi-key",
  "3e1bc86471msh4a307d58cfe8694p1eea1ajsn3e2bd15cb7fa",
  "x-rapidapi-host",
  "moviesdatabase.p.rapidapi.com"
);

export function fetchMovies() {
  return async (dispatch) => {
    try {
      let allMovies = [];
      const res = await axios.get(
        "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming",
        headers
      );
      console.log(res);
      allMovies = [...allMovies,...res.data];
      dispatch({ type: "GET_UPCOMING_MOVIES", payload: allMovies }); // Dispatch the action here
    } catch (error) {
      console.log(error);
    }
  };
}