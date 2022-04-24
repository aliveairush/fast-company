import React from "react";
import PropTypes from "prop-types";
import Table from "./table";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
const UsersTable = ({data, onSort, columns, selectedSort}) => {

  return (
    <Table>
      <TableHeader {...{onSort, selectedSort, columns}} />
      <TableBody {...{columns, data}}/>
    </Table>
  );
};

UsersTable.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  onSort: PropTypes.func,
  selectedSort: PropTypes.object,
};

export default UsersTable;