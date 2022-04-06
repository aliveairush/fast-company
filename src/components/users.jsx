import React, {useState} from "react";
import Quality from "./quality";
import SearchStatus from "./searchStatus";
import Bookmark from "./bookmark";
import Pagination from "./pagination";
import paginate from "../utils/paginate";
import PropTypes from "prop-types";

const Users = ({users, ...rest}) => {
  const columns = ["Имя", "Качества", "Профессия", "Встретился, раз", "Оценка", "Избранное", ""];

  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const usersCrop = paginate(users, currentPage, pageSize);

  const handlePageChange = (pageIndex) => setCurrentPage(pageIndex);

  // If every user on the page has been deleted and page is bigger than 0 then show previous page
  if (!usersCrop.length && currentPage > 0) {
    handlePageChange(currentPage - 1);
  }

  const renderUsersTable = (userList) => {
    return <table className={`table table-hover mt-4 align-middle`}>
      <thead className="table-dark">
        <tr>
          {columns.map(column => <th className="align-middle" key={column} scope="col">{column}</th>)}
        </tr>
      </thead>
      <tbody>
        {userList.map(user =>
          <tr key={user._id.toString()}>
            <td>{user.name}</td>
            <td>{user.qualities.map(quality => <Quality key={quality._id} {...quality} />)}</td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}</td>
            <td><Bookmark/></td>
            <td>
              <button className="btn btn-danger" onClick={() => rest.onDelete(user._id)}>Delete</button>
            </td>
          </tr>)}
      </tbody>
    </table>;
  };

  return (
    <div className="container">
      <SearchStatus length={users.length}/>
      {users.length ? renderUsersTable(usersCrop) : null}
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
  onDelete: PropTypes.func.isRequired
};

export default Users;
