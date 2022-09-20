import { accessToken } from "../token";

const checkResponse = response => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  return response.json();
};

 const getUserData = (username , bool) => {
    if(bool){
        return fetch(`https://api.github.com/users/${username}/repos`, { headers: { authorization: `token ${accessToken}`}})
        .then(checkResponse)
        .catch(err => {
          throw new Error(`fetch getUserData failed ${err}`);
        });    
    }else{
        return fetch(`https://api.github.com/users/${username}`, { headers: { authorization: `token ${accessToken}`}})
        .then(checkResponse)
        .catch(err => {
          throw new Error(`fetch getUserData failed ${err}`);
        });
    }

};


export default getUserData;