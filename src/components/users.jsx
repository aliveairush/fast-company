import React, {useState} from "react";
import SearchStatus from "./searchStatus";
import Pagination from "./pagination";
import paginate from "../utils/paginate";
import PropTypes from "prop-types";
import UsersTable from "./usersTable";
import Bookmark from "./bookmark";
import QualitiesList from "./qualitiesList";

const Users = ({users, onSort, selectedSort, ...rest}) => {
  const columns = [
    {property: "name", title: "Имя"},
    {title: "Качества",
      component: (user) =>  <QualitiesList qualities={user.qualities}/>
    },
    {property: "profession.name", title: "Профессия"},
    {property: "completedMeetings", title: "Встретился, раз"},
    {property: "rate", title: "Оценка"},
    {property: "bookmark", title: "Избранное", 
      component: () => <Bookmark/>
    },
    {component: (user) => 
      <button className="btn btn-danger"
        onClick={() => rest.onDelete(user._id)} >Delete
      </button>}
  ];

  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const usersCrop = paginate(users, currentPage, pageSize);

  const handlePageChange = (pageIndex) => setCurrentPage(pageIndex);

  // If every user on the page has been deleted and page is bigger than 0 then show previous page
  if (!usersCrop.length && currentPage > 0) {
    handlePageChange(currentPage - 1);
  }

  return (
    <div className="p-4">
      <SearchStatus length={users.length}/>
      {users.length ? <UsersTable selectedSort={selectedSort} data={usersCrop} {...rest} onSort={onSort} columns={columns} /> : null}
      {users.length
        ? <Pagination itemsCount={users.length} pageSize={pageSize} currentPage={currentPage}
          onPageChange={handlePageChange}/>
        : null}
    </div>);
};

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profession: PropTypes.object.isRequired,
    qualities: PropTypes.array.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired
  })).isRequired,
  onDelete: PropTypes.func.isRequired,
  onSort: PropTypes.func,
  selectedSort: PropTypes.object
};

export default Users;
