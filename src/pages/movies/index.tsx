import { useState } from "react";
import { NextPage } from "next";
import { GetServerSideProps } from "next";
import Layout from "@/components/ui/layout";
import { Movie } from "@/interfaces";
import TextField from "@/components/common/form/textField";
import DropDownList from "@/components/ui/dropDownList";
import MoviesList from "@/components/ui/moviesList";

type initialMoviesProps = {
  initialMovies: Movie[] | [];
};

const MovieSearch: NextPage<initialMoviesProps> = ({ initialMovies }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState<Movie[]>(initialMovies || []);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isShowMovies, setIsShowMovies] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    if (event.target.value) {
      setIsLoading(true);
      fetch(
        `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${event.target.value}`
      )
        .then((response) => response.json())
        .then((data) => {
          setIsLoading(false);
          if (data.Response === "True") {
            setMovies(data.Search);
          } else {
            setMovies([]);
          }
          setIsDropdownOpen(true);
        })
        .catch((error) => {
          setIsLoading(false);
          console.error(error);
        });
    } else {
      setIsDropdownOpen(false);
      setMovies([]);
    }
  };

  const handleDropdownItemClick = (movie: Movie) => {
    setSearchTerm(movie.Title);
    setMovies([]);
    setIsDropdownOpen(false);
  };

  const handleShowMoviesList = () => {
    setIsShowMovies((prevState) => !prevState);
    setIsDropdownOpen(false);
  };

  return (
    <Layout title="Movies List">
      <div className="d-flex justify-content-center align-items-center bg-light p-5">
        <h2 className="me-2">Search Movies:</h2>
        <div className="w-50 position-relative">
          <TextField
            name="search"
            value={searchTerm}
            inputClasses="form-control"
            onChange={handleInputChange}
            placeholder="Search for a movie"
          />
          {isDropdownOpen && (
            <div className="w-100 position-absolute top-100 start-0">
              <DropDownList
                isLoading={isLoading}
                movies={movies}
                onClick={handleDropdownItemClick}
              />
            </div>
          )}
        </div>
        <button
          className="btn btn-outline-secondary align-items-center"
          type="button"
          onClick={handleShowMoviesList}
        >
          Search
        </button>
      </div>
      {isShowMovies && <MoviesList movies={movies} />}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<{
  initialMovies: initialMoviesProps;
}> = async (ctx) => {
  const { query } = ctx;
  const searchTerm = query.term || "";

  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${searchTerm}`
  );
  const data = await response.json();

  return {
    props: {
      initialMovies: data.Search || [],
    },
  };
};

export default MovieSearch;
