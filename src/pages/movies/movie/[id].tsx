import { NextPage } from "next";
import Link from "next/link";
import { Movie } from "@/interfaces";
import Bookmark from "@/components/common/bookmark";
import { useState } from "react";

interface Props {
  movie: Movie;
}

const MoviePage: NextPage<Props> = ({ movie }) => {
  const [isBookmark, setIsBookmark] = useState(false);
  const handleSavedMovie = () => {
    setIsBookmark((prevState) => !prevState);
  };

  return (
    <>
      <div className="d-flex justify-content-center p-3">
        <img className="me-3 mb-3" src={movie.Poster} alt="movie.Poster" />
        <div className="w-50 d-flex flex-column justify-content-between pb-2">
          <div>
            <div className="d-flex justify-content-between">
              <h1 className="text-primary">{movie.Title}</h1>
              <Bookmark isBookmark={isBookmark} onSave={handleSavedMovie} />
            </div>
            <div className="mb-2">
              <span className="me-2">
                <b>Year:</b> {movie.Year}
              </span>
              <span className="me-2">
                <b>Ratings:</b> {movie.imdbRating}
              </span>
              <span className="me-2">
                <b>Released:</b> {movie.Released}
              </span>
            </div>
            <div className="badge bg-secondary fs-6 mb-2">
              Genre: {movie.Genre}
            </div>
            <div className="mb-2">
              <b>Writter:</b> {movie.Writer}
            </div>
            <div className="mb-2">
              <b>Actors:</b> {movie.Actors}
            </div>
            <p className="mb-2">
              <b>Plot:</b> {movie.Plot}
            </p>
            <div className="mb-2 text-primary">
              <b>Language:</b> {movie.Language}
            </div>
            <div>
              <i className="bi bi-award text-primary"></i> {movie.Awards}
            </div>
          </div>
          <Link href="/movies" legacyBehavior>
            <a className="text-decoration-none fs-3">Go back to Search</a>
          </Link>
        </div>
      </div>
    </>
  );
};

MoviePage.getInitialProps = async (ctx) => {
  const { query } = ctx;

  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${query.id}`
  );
  const movie = await response.json();

  return {
    movie,
  };
};

export default MoviePage;
