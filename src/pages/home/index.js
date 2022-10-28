import { Container, MovieList, Movie } from "./styles";
import { useState, useEffect } from "react";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const APIkey = `minhachaveaqui`;
    fetch(`https://api.themoviedb.org/3/movie/550?api_key=${APIkey}`)
      .then((response) => response.json())
      .then((data) => console.log(data.results));
  }, []);

  return (
    <Container>
      <h1>Movies</h1>;
      <MovieList>
        {movies.map((movie) => {
          return (
            <Movie key={movie.id}>
              <a href="https://google.com.br">
                <img src={movie.image_url} alt={movie.title} />
              </a>
              <span>{movie.title}</span>
            </Movie>
          );
        })}
      </MovieList>
    </Container>
  );
}

export default Home;
