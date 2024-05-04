/* eslint-disable react/prop-types */
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

import ReactPaginate from "react-paginate";

const Pagination = ({ totalPages, setCurrPage }) => {
  const handlePageClick = ({ selected }) => {
    setCurrPage(selected + 1);
  };
  const commonClass =
    "h-9 w-9 flex items-center justify-center duration-300 transition-all";
  return (
    <ReactPaginate
      breakLabel="..."
      pageCount={totalPages ? totalPages : 0}
      pageRangeDisplayed={3}
      onPageChange={handlePageClick}
      containerClassName="flex flex-wrap items-center gap-2 justify-center pagination"
      pageClassName=""
      pageLinkClassName={`text-black bg-gray-100 hover:bg-black hover:text-white ${commonClass}`}
      previousClassName={commonClass}
      previousLinkClassName="text-black"
      nextClassName={commonClass}
      nextLinkClassName="text-black"
      activeLinkClassName="bg-black"
      activeClassName="active"
      renderOnZeroPageCount={null}
      nextLabel={
        <span className={`hover:bg-black hover:text-white ${commonClass}`}>
          <GoChevronRight className="text-xl" />
        </span>
      }
      previousLabel={
        <span className={`hover:bg-black hover:text-white ${commonClass}`}>
          <GoChevronLeft className="text-xl" />
        </span>
      }
    />
  );
};
export default Pagination;
