export interface Movie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
  Plot?: string;
  imdbRating?: string;
  Released?: string;
  Genre?: string;
  Writer?: string;
  Actors?: string;
  Language?: string;
  Awards?: string;
  bookmark?: boolean;
}

export interface MoviesListProps {
  movies: Movie[];
}

export interface LayoutProps {
  children?: React.ReactNode;
  title: string;
  background?: string;
}

export interface ReusableFieldProps {
  label?: string;
  type?: string;
  name: string;
  inputClasses?: string;
  placeholder?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export interface DropDownProps {
  isLoading: boolean;
  movies: Movie[];
  onClick: (movie: Movie) => void;
}

export interface ListGroupProps {
  movies: Movie[];
  onClick: (movie: Movie) => void;
  imageWidth: string;
  blockHeight: string;
}

export interface OptionsProps {
  name: string;
  value: string;
}

export interface RadioFieldProps {
  label: string;
  value: string;
  options: OptionsProps[];
  name: string;
  onChange({ target }: React.ChangeEvent<HTMLInputElement>): void;
}
