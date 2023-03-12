import { useState } from "react";
import Link from "next/link";
import { Movie, MoviesListProps } from "@/interfaces";
import Pagination from "./pagination";
import { paginate } from "@/utils/paginate";

const MoviesList = ({ movies }: MoviesListProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 3;
  const count = movies.length;
  const moviesCrop = paginate(movies, currentPage, pageSize);

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  const handlePageChangeByArrows = (number: number) => {
    setCurrentPage((prevState) => prevState + number);
  };
  return (
    <>
      <div className="container text-center pt-3">
        <ul className="row gap-3 justify-content-center">
          {moviesCrop.map((movie: Movie) => (
            <Link
              href={`/movies/movie/${movie.imdbID}`}
              key={movie.imdbID}
              className="col-auto bg-light pt-2 pb-2 text-decoration-none"
              style={{ width: "320px" }}
            >
              <li role="button" className="list-unstyled">
                <h4>{movie.Title}</h4>
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="h-75 w-75"
                />
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="d-flex justify-content-center">
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onChangePage={handlePageChange}
          onChangePageByArrows={handlePageChangeByArrows}
        />
      </div>
    </>
  );
};

export default MoviesList;
