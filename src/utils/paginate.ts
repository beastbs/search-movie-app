import { Movie } from "@/interfaces";

export const paginate = (
  items: Movie[],
  pageNumber: number,
  pageSize: number
) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return [...items].splice(startIndex, pageSize);
};
