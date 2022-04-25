import React from "react";
import PropTypes from "prop-types";
import {ReactComponent as CaretDownIcon} from "../assets/icons/chevron-down.svg";
import {ReactComponent as CaretUpIcon} from "../assets/icons/chevron-up.svg";

const TableHeader = ({onSort, selectedSort, columns}) => {

  const handleSort = (property) => {
    if(selectedSort.iter === property) {
      onSort({...selectedSort, order: selectedSort.order === "asc"? "desc" : "asc"});
    } else {
      onSort({iter: property, order: "asc"});
    }
  };
  
  const renderCaret = (column) => {
    if (column.property === selectedSort.iter) {
      return selectedSort.order === "asc" ? <CaretUpIcon/> : <CaretDownIcon/>;
    }
  };

  return (
    <thead className="table-dark">
      <tr>
        {columns.map((column, index)=>
          (<th 
            // If column has property then it is clickable, and we can sort it
            { ...column.property && {
              role: "button",
              onClick: () => handleSort(column.property),
            }}
              
            className="align-middle"
            key={index}
            scope="col">

            {column.title}

            {renderCaret(column)}
          </th>))}
      </tr>
    </thead>
  );
};

TableHeader.propTypes = {
  onSort: PropTypes.func,
  selectedSort: PropTypes.object,
  columns: PropTypes.array.isRequired,
};

export default TableHeader;