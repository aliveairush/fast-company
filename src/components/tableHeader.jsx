import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({onSort, selectedSort, columns}) => {

  console.log(onSort);
  console.log(selectedSort);
  const handleSort = (property) => {
    if(selectedSort.iter === property) {
      onSort({...selectedSort, order: selectedSort.order === "asc"? "desc" : "asc"});
    } else {
      onSort({iter: property, order: "asc"});
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