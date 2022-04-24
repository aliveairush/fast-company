import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import PropTypes from "prop-types";

const Table = ({data, columns, onSort, selectedSort, children}) => {
  return (
    <table className={`table table-hover mt-4 align-middle`}>
      {/*If children exist then show them otherwise  show tableHeader and tableBody by using props data*/}
      {children || <><TableHeader {...{onSort, selectedSort, columns}} />
        <TableBody {...{columns, data}}/></>}
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  onSort: PropTypes.func,
  selectedSort: PropTypes.object,
  children: PropTypes.array,
};

export default Table;