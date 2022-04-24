import React, {useEffect, useState} from "react";
import api from "./api";
import Users from "./components/users";
import GroupList from "./components/groupList";
import _ from "lodash";

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll);

  const [professions, setProfessions] = useState();
  const [selectedProf, setSelectedProf] = useState();
  const [sortBy, setSortBy] = useState({iter: "name", order: "asc"});

  useEffect(() => {
    api.professions.fetchAll()
      .then(data => setProfessions(data));
  });
  
  const filteredUsers = selectedProf ? users.filter(user => user.profession._id === selectedProf._id) : users;
  const sortedUsers = _.orderBy(filteredUsers, [sortBy.iter], [sortBy.order]);

  const handleProfessionSelect = (item) => setSelectedProf(item);

  const handleDelete = (userId) => setUsers(users.filter(user => user._id !== userId));
  
  const handleSort = (sortBy) => setSortBy(sortBy);

  return (
    <div className="container d-flex">
      <div className="mt-4">
        {professions && (
          <>
            <GroupList items={professions} onItemSelect={handleProfessionSelect} selectedItem={selectedProf }/>
            <button onClick={() => setSelectedProf()} className="btn btn-primary mt-3"  >Clear filter</button>
          </>)}
        
      </div>
      
      <div className="flex-grow-1 ">
        <Users users={sortedUsers} onSort={handleSort} selectedSort={sortBy} onDelete={handleDelete}/>
      </div>
    </div>
  );
};

export default App;
