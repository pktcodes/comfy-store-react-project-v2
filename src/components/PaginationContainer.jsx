import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { page, pageCount } = meta.pagination;

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  if (pageCount < 2) {
    return null;
  }

  return (
    <div className="mt-16 flex justify-end">
      <div className="join ">
        <button
          type="button"
          className="btn join-item btn-sm sm:btn-md"
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) {
              prevPage = pageCount;
            }
            handlePageChange(prevPage);
          }}
        >
          PREV
        </button>
        {pages.map((pageNumber) => {
          return (
            <button
              type="button"
              key={pageNumber}
              className={`btn join-item btn-sm sm:btn-md ${
                pageNumber === page && "border-base-300 bg-base-300"
              }`}
              onClick={() => {
                handlePageChange(pageNumber);
              }}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          type="button"
          className="btn join-item btn-sm border-none sm:btn-md"
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) {
              nextPage = 1;
            }
            handlePageChange(nextPage);
          }}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default PaginationContainer;
