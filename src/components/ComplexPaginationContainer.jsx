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
    const pageButtons = [];

    /* First Button */
    pageButtons.push(addPageButton({ pageNumber: 1, activeClass: page === 1 }));

    /* Dots */
    if (page > 2) {
      pageButtons.push(
        <button className="btn join-item btn-sm sm:btn-md" key="dots-1">
          ...
        </button>,
      );
    }

    /* Active Button */
    if (page !== 1 && page !== pageCount) {
      pageButtons.push(addPageButton({ pageNumber: page, activeClass: true }));
    }

    /* Dots */
    if (page < pageCount - 1) {
      pageButtons.push(
        <button className="btn join-item btn-sm sm:btn-md" key="dots-2">
          ...
        </button>,
      );
    }

    /* Last Button */
    pageButtons.push(
      addPageButton({ pageNumber: pageCount, activeClass: page === pageCount }),
    );
    return pageButtons;
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
