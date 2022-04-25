import React, {useEffect, useState} from "react";
import UsersTable from "../components/usersTable";
import GroupList from "../components/groupList";
import api from "../api";
import _ from "lodash";

const UsersForm = () => {
  
  const [users, setUsers] = useState(api.users.fetchAll);

  // Array of professions
  const [professions, setProfessions] = useState();
  
  // string by which filtering will be proceeded
  const [selectedProf, setSelectedProf] = useState();
  // Object which defines sorting
  const [sortBy, setSortBy] = useState({iter: "name", order: "asc"});

  // Setting all users 
  useEffect(() => {
    api.professions.fetchAll()
      .then(data => setProfessions(data));
  });

  // Filtering users by profession
  const filteredUsers = selectedProf ? users.filter(user => user.profession._id === selectedProf._id) : users;
  // Sorting filtered users by sortBy object
  const sortedUsers = _.orderBy(filteredUsers, [sortBy.iter], [sortBy.order]);
  
  const handleProfessionSelect = (item) => setSelectedProf(item);

  const handleDelete = (userId) => setUsers(users.filter(user => user._id !== userId));

  const handleSort = (sortBy) => setSortBy(sortBy);


  const handleBookmarkClick = (user) => {
    const newUsers = users.map(u => {
      if (u._id === user._id) {
        u.bookmark = !u.bookmark;
      }
      return u;
    });
    setUsers(newUsers);
  };

  // When users and profession ready show page
  return (sortedUsers && professions ?
    <div className="container d-flex">
      <div className="mt-4">
        <GroupList items={professions} onItemSelect={handleProfessionSelect} selectedItem={selectedProf }/>
        <button onClick={() => setSelectedProf()} className="btn btn-primary mt-3">Clear filter</button>
      </div>

      <div className="flex-grow-1 ">
        <div className="p-4">
          <UsersTable
            data={sortedUsers}
            onBookmarkClick={handleBookmarkClick}
            selectedSort={sortBy}
            onDelete={handleDelete}
            onSort={handleSort}
          />
        </div>
      </div>
    </div> 
    :
    <h3 className="text-center">Loading...</h3>
  );
};

export default UsersForm;
