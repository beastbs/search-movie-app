import { ListGroupProps, Movie } from "@/interfaces";
import Link from "next/link";

const ListGroup = ({
  movies,
  onClick,
  imageWidth = "100%",
  blockHeight = "100%",
}: ListGroupProps) => {
  const getMovieImage = (movie: Movie) => {
    return movie.Poster === "N/A" ? "/not-available.jpg" : movie.Poster;
  };

  return (
    <ul className="list-group list-group-item-action overflow-scroll">
      {movies.map((movie) => (
        <Link
          key={movie.imdbID}
          href={`movies/movie/${movie.imdbID}`}
          legacyBehavior
        >
          <a className="text-decoration-none">
            <li
              className={`list-group-item list-group-item-action d-flex`}
              role="button"
              tabIndex={1}
              onClick={() => onClick(movie)}
            >
              <img
                className={"me-2"}
                src={getMovieImage(movie)}
                alt={movie.Title}
              />
              <div>
                <h4>{movie.Title}</h4>
                <span>{movie.Year}</span>
              </div>
            </li>
          </a>
        </Link>
      ))}
      <style jsx>{`
        ul {
          height: ${blockHeight};
        }
        img {
          width: ${imageWidth};
        }
      `}</style>
    </ul>
  );
};

export default ListGroup;
