import React, {useState} from 'react';
import api from "./api";
import Users from "./components/users";

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll);

  const handleDelete = (userId) => setUsers(users.filter(user => user._id !== userId));

  return (
    <div>
      <Users users={users} onDelete={handleDelete}/>
    </div>
  );
};

export default App;