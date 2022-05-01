import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import api from "../../api";
import {Link} from "react-router-dom";
import QualitiesList from "../../components/qualitiesList";

const UserPage = ({userId}) => {

  const [user, setUser] = useState();
  
  useEffect(()=> {
    api.users.getById(userId)
      .then((u) => setUser(u));
  }, []);

  return user ? 
    (<main className="container">
      <h1>{user.name}</h1>
      <hr/>
      <h3>Профессия: {user.profession.name}</h3>
      <QualitiesList qualities={user.qualities}/>
      
      <p className="mt-4">Завершенные встречи: {user.completedMeetings}</p>

      <h2>Rate: {user.rate}</h2>
      <button className="btn btn-primary"><Link style={{color: "white"}} to="/users">Все пользователи</Link></button>
    </main>)
    :
    <h3 className="text-center">Loading...</h3>;
 
};

UserPage.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default UserPage;