import React, {useState} from 'react';
import api from "../api";

function Users() {

  const [users, setUsers] = useState(api.users.fetchAll);

  const handleDelete = (userId) => setUsers(users.filter(user => user._id !== userId));

  const renderPhrase = (number) => {
    if (number === 0) return <h3><span className="badge bg-primary bg-danger">Никто с тобой не тусанет</span></h3>

    const wordForms = ['Человек', 'Человека']

    let word = wordForms[0];

    const remainder = number % 10;
    if (remainder >= 2 && remainder <= 4) word = wordForms[1]; // if remainder is 2 then its  2, 12, 22,... and correct lexical form is plural
    if (number >= 12 && number <= 14) word = wordForms[0]; // but even if remainder 2,3 or 4 there is exception with numbers 12,13,14. And correct lexical form is single

    return <h3><span className="badge bg-primary">{number} {word} тусанет с тобой сегодня</span></h3>
  }

  return users.length === 0 ? renderPhrase(users.length) : <>
    {renderPhrase(users.length)}

    <table className="table">
      <thead>
      <tr>
        {['Имя', 'Качества','Профессия','Встретился, раз','Оценка',''].map(colName => <th key={colName} scope="col">{colName}</th>)}
      </tr>
      </thead>
      <tbody>
      {users.map(user => <tr key={user._id}>
        <td>{user.name}</td>
        <td>{user.qualities.map(quality => <span key={quality._id}
                                                 className={`badge bg-secondary bg-${quality.color}`}>{quality.name}</span>)}</td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}</td>
        <td><button className="btn btn-danger" onClick={() => handleDelete(user._id)}>Delete</button></td>
      </tr>)}
      </tbody>
    </table>
  </>
}

export default Users;