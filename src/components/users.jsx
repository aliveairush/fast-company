import React from 'react';
import Quality from "./quality";
import SearchStatus from "./searchStatus";
import Bookmark from "./bookmark";


const Users = ({users, ...rest}) => {
  const columns = ['Имя', 'Качества', 'Профессия', 'Встретился, раз', 'Оценка', 'Избранное', ''];

  const renderUsersTable = (userList) => {
    return <table className={`table table-hover mt-4 align-middle`}>
      <thead className="table-dark">
      <tr>
        {columns.map(column => <th className="align-middle" key={column} scope="col">{column}</th>)}
      </tr>
      </thead>
      <tbody>
      {userList.map(user => <tr key={user._id}>
        <td>{user.name}</td>
        <td>{user.qualities.map(quality => <Quality {...quality} />)}</td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}</td>
        <td><Bookmark/></td>
        <td><button className="btn btn-danger" onClick={() => rest.onDelete(user._id)}>Delete</button></td>
      </tr>)}
      </tbody>
    </table>
  }

  return <div className='container'><SearchStatus
    length={users.length}/> {users.length && renderUsersTable(users)}</div>
}

export default Users;