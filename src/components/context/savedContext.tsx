import { createContext, useContext, useState } from "react";
import { Movie } from "@/interfaces";

interface SavedProps {
  saved: Movie[];
  handleSaveMovies: (movie: Movie, bookmark: boolean) => void;
}

const SavedContext = createContext<SavedProps | null>(null);

export const useSaved = () => {
  const context = useContext(SavedContext);

  if (!context) {
    throw Error("Context is null");
  }

  return context;
};

export const SavedProvider = ({ children }: React.PropsWithChildren) => {
  const [saved] = useState<Movie[]>([]);

  const handleSaveMovies = (movie: Movie, bookmark: boolean) => {
    const newMovie = { ...movie, bookmark: bookmark };
    if (!saved.length) {
      saved.push(newMovie);
    } else {
      const isNewMovie = saved.some(
        (movie) => movie.imdbID === newMovie.imdbID
      );
      if (!isNewMovie) {
        saved.push(newMovie);
      } else {
        return;
      }
    }
  };

  const dataSavedMovies = {
    saved,
    handleSaveMovies,
  };

  return (
    <SavedContext.Provider value={dataSavedMovies}>
      {children}
    </SavedContext.Provider>
  );
};
