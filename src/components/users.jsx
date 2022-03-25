import React, {useState} from 'react';
import api from "../api";

function Users() {

  const [users, setUsers] = useState(api.users.fetchAll);

  const handleDelete = (userId) => {

  }

  const renderPhrase = (number) => {

  }

  return (
    <table className="table">
      <thead>
      <tr>
        <th scope="col">Имя</th>
        <th scope="col">Качества</th>
        <th scope="col">Профессия</th>
        <th scope="col">Встретился, раз</th>
        <th scope="col">Оценка</th>
        <th scope="col"/>
      </tr>
      </thead>
      <tbody>
      {users.map(user =>
        <tr key={user._id} >
          <td>{user.name}</td>
          <td>{user.qualities.map(quality => <span key={quality._id} className={`badge bg-secondary bg-${quality.color}`}>{quality.name}</span>)}</td>
          <td>{user.profession.name}</td>
          <td>{user.completedMeetings}</td>
          <td>{user.rate}</td>
          <td><button className="btn btn-danger">Delete</button></td>
        </tr>)}
      </tbody>
    </table>
  );
}

export default Users;