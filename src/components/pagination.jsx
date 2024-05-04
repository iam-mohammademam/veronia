/* eslint-disable react/prop-types */
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

import ReactPaginate from "react-paginate";

const Pagination = ({ totalPages, setCurrPage }) => {
  const handlePageClick = ({ selected }) => {
    setCurrPage(selected + 1);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      pageCount={totalPages ? totalPages : 0}
      pageRangeDisplayed={3}
      onPageChange={handlePageClick}
      containerClassName="flex flex-wrap items-center gap-2 justify-center"
      pageClassName="p-1 h-9 w-9 bg-gray-100 flex items-center justify-center"
      pageLinkClassName="text-sm text-black text-center"
      previousClassName="h-9 w-9 rounded-full flex items-center justify-center"
      nextClassName="h-9 w-9 rounded-full flex items-center justify-center"
      previousLinkClassName="text-black"
      nextLinkClassName="text-black"
      activeLinkClassName="text-black"
      activeClassName="bg-gray-300"
      renderOnZeroPageCount={null}
      nextLabel={
        <span className="flex items-center gap-2 text-lg">
          <GoChevronRight className="text-black" />
        </span>
      }
      previousLabel={
        <span className="flex items-center justify-center text-lg">
          <GoChevronLeft className="text-black" />
        </span>
      }
    />
  );
};
export default Pagination;
