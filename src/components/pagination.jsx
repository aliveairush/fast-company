import React from "react";
import PropTypes from "prop-types";

const Pagination = ({itemsCount, pageSize, currentPage, onPageChange}) => {
  const pages = new Array(Math.ceil(itemsCount / pageSize)).fill(1).map((number, index) => index + 1);

  if (pages.length === 1) return <></>;

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li key={page} className={`page-item ${page === currentPage && "active"}`}>
            <button className="page-link"
              onClick={() => onPageChange(page)}>{page}</button>
          </li>))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
