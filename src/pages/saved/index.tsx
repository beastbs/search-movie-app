import Layout from "@/components/ui/layout";
import MoviesList from "@/components/ui/moviesList";
import { useSaved } from "@/components/context/savedContext";

const SavedMovies = () => {
  const { saved } = useSaved();
  return (
    <Layout title="Favorite Movies">
      {saved.length ? (
        <MoviesList movies={saved} />
      ) : (
        <h1 className="mt-3">No saved Movies!</h1>
      )}
    </Layout>
  );
};

export default SavedMovies;
