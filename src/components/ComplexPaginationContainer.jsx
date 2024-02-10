import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const ComplexPaginationContainer = () => {
  const { meta } = useLoaderData();
  const { page, pageCount } = meta.pagination;

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

  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        type="button"
        key={pageNumber}
        className={`btn join-item btn-sm sm:btn-md ${
          activeClass && "border-base-300 bg-base-300"
        }`}
        onClick={() => {
          handlePageChange(pageNumber);
        }}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    return <></>;
  };

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
        {renderPageButtons()}
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

export default ComplexPaginationContainer;