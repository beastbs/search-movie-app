import _ from "lodash";

interface PaginationProps {
  itemsCount: number;
  pageSize: number;
  currentPage: number;
  onChangePage: (pageIndex: number) => void;
  onChangePageByArrows: (number: number) => void;
}

const Pagination = ({
  itemsCount,
  pageSize,
  currentPage,
  onChangePage,
  onChangePageByArrows,
}: PaginationProps) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount <= 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <nav>
      <ul className="pagination">
        <li className={`page-item ${currentPage <= 1 && "disabled"}`}>
          <button
            className="page-link"
            onClick={() => onChangePageByArrows(-1)}
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        {pages.map((page: number) => (
          <li
            key={`${page}_page`}
            className={`page-item ${page === currentPage && "active"}`}
          >
            <button
              className={`page-link ${
                currentPage === itemsCount && "disabled"
              }`}
              onClick={() => onChangePage(page)}
            >
              {page}
            </button>
          </li>
        ))}
        <li className={`page-item ${currentPage >= pageCount && "disabled"}`}>
          <button
            className="page-link"
            onClick={() => onChangePageByArrows(1)}
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
