import React, {useState} from 'react';
import api from "../api";
import Badge from "./badge";

const Users = () => {

  const [users, setUsers] = useState(api.users.fetchAll);

  const handleDelete = (userId) => setUsers(users.filter(user => user._id !== userId));

  const renderPhrase = (number) => {
    if (number === 0) return <h3><span className="badge bg-primary bg-danger mt-4 ">Никто с тобой не тусанет</span></h3>

    const wordForms = ['Человек', 'Человека']

    let word = wordForms[0];

    const remainder = number % 10;
    if (remainder >= 2 && remainder <= 4) word = wordForms[1]; // if remainder is 2 then its  2, 12, 22,... and correct lexical form is plural
    if (number >= 12 && number <= 14) word = wordForms[0]; // but even if remainder 2,3 or 4 there is exception with numbers 12,13,14. And correct lexical form is single

    return <h3><span className="badge bg-primary mt-4 ">{number} {word} тусанет с тобой сегодня</span></h3>
  }

  const renderUsersTable = (userList) => {
    return <table className={`table table-hover mt-4 align-middle`}>
      <thead className="table-dark">
      <tr>
        {['Имя', 'Качества', 'Профессия', 'Встретился, раз', 'Оценка', ''].map(colName => <th className="align-middle"
                                                                                              key={colName}
                                                                                              scope="col">{colName}</th>)}
      </tr>
      </thead>
      <tbody>
      {userList.map(user => <tr key={user._id}>
        <td>{user.name}</td>
        <td>{user.qualities.map(quality => <Badge key={quality._id} name={quality.name} color={quality.color}/>)}</td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}</td>
        <td>
          <button className="btn btn-danger" onClick={() => handleDelete(user._id)}>Delete</button>
        </td>
      </tr>)}
      </tbody>
    </table>
  }

  return <div className='container'>{renderPhrase(users.length)} {users.length !== 0 && renderUsersTable(users)}</div>
}

export default Users;