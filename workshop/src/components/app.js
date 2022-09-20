import React, { useState } from "react";
import UserHeader from './UserHeader';
import RepoList from './RepoList';



const App = () => {
  const [userData, setUserData] = useState(null);


  return <div>
    <UserHeader userData={userData} setUserData={setUserData} />
 <RepoList userData={userData} setUserData={setUserData}  ></RepoList>
    </div>;


};

export default App;
