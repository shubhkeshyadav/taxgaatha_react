import React from "react";
import ReactPaginate from "react-paginate";
let currentPage = 0;
const Pagination = (props) => {
  const pageCount = Math.ceil(
    props.totalItems / process.env.REACT_APP_ITEM_PER_PAGE
  );
  currentPage = props.currentPage;

  const handlePageClick = (event) => {
    const pageNo = event.selected + 1;
    props.onPageChange(pageNo);
  };

  return (
    <div className="center-block text-center">
      <ReactPaginate
        breakLabel="..."
        forcePage={currentPage - 1}
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Prev"
        renderOnZeroPageCount={null}
        containerClassName={"pagination mb-5 mb-lg-0"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        activeClassName={"page-item active"}
        previousClassName={"page-item page-prev"}
        nextClassName={"page-item page-next"}
        nextLinkClassName={"page-link"}
        previousLinkClassName={"page-link"}
        disabledClassName={"page-item page-prev disabled"}
      />
    </div>
  );
};
export default Pagination;
