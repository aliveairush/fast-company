import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const TableBody = ({data, columns}) => {

  const renderTableRow = (item) => {
    return columns.map((column, index) => {
      if (column.component) return <td key={index}>{column.component(item)}</td>;
      return <td key={index} >{_.get(item, column.property)}</td>;
    });
  };
 
  return (
    <tbody>
      {data.map(item =>
        <tr key={item._id.toString()}>
          {renderTableRow(item)}
        </tr>)}
    </tbody>
  );
};

TableBody.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
};

export default TableBody;