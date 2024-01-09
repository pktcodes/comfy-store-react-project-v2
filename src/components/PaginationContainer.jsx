import { useLoaderData } from "react-router-dom";

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { page, pageCount } = meta.pagination;

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  const handlePageChange = (pageNumber) => {
    console.log(pageNumber);
  };

  if (pageCount < 2) {
    return null;
  }

  return (
    <div className="mt-16 flex justify-end">
      <div className="join ">
        <button
          type="button"
          className="btn join-item btn-xs sm:btn-sm"
          onClick={() => handlePageChange("prev")}
        >
          PREV
        </button>
        {pages.map((pageNumber) => {
          return (
            <button
              type="button"
              key={pageNumber}
              className={`btn join-item btn-xs sm:btn-sm ${
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
          className="btn join-item btn-xs border-none sm:btn-sm"
          onClick={() => {
            handlePageChange("next");
          }}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default PaginationContainer;
