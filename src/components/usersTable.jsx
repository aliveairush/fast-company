import React, {useState} from "react";
import PropTypes from "prop-types";
import Table from "./table";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import QualitiesList from "./qualitiesList";
import Bookmark from "./bookmark";
import paginate from "../utils/paginate";
import Pagination from "./pagination";
import SearchStatus from "./searchStatus";
import {Link} from "react-router-dom";

const UsersTable = ({data, onSort, onBookmarkClick, onDelete, selectedSort}) => {

  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const usersCrop = paginate(data, currentPage, pageSize);

  const handlePageChange = (pageIndex) => setCurrentPage(pageIndex);

  // If every user on the page has been deleted and page is bigger than 0 then show previous page
  if (!usersCrop.length && currentPage > 0) {
    handlePageChange(currentPage - 1);
  }

  const columns = [
    {property: "name", title: "Имя", component: (user) =>  <Link to={`/users/${user._id}`}>{user.name}</Link>},
    {title: "Качества",
      component: (user) =>  <QualitiesList qualities={user.qualities}/>
    },
    {property: "profession.name", title: "Профессия"},
    {property: "completedMeetings", title: "Встретился, раз"},
    {property: "rate", title: "Оценка"},
    {property: "bookmark", title: "Избранное",
      component: (user) => <Bookmark value={user.bookmark} onClick={() => onBookmarkClick(user)} />
    },
    {component: (user) =>
      <button className="btn btn-danger"
        onClick={() => onDelete(user._id)} >Delete
      </button>}
  ];
    
  return (
    <>
      <SearchStatus length={data.length}/>
      <Table>
        <TableHeader {...{onSort, selectedSort, columns}} />
        <TableBody columns={columns} data={usersCrop} />
      </Table>

      <Pagination
        itemsCount={data.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

UsersTable.propTypes = {
  data: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSort: PropTypes.func,
  selectedSort: PropTypes.object,
  onBookmarkClick: PropTypes.func,
};

export default UsersTable;