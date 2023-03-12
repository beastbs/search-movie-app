import { DropDownProps } from "@/interfaces";
import ListGroup from "./listGroup";

const DropDownList = ({ isLoading, movies, onClick }: DropDownProps) => {
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : movies.length === 0 ? (
        <div>No matching movies found.</div>
      ) : (
        <ListGroup
          movies={movies}
          onClick={onClick}
          imageWidth="50px"
          blockHeight="500px"
        />
      )}
    </div>
  );
};

export default DropDownList;
