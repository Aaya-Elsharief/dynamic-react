import { useEffect } from 'react';
import getUserData from '../utils/getUserData';



const UserHeader = ({userData ,setUserData}) => {
    // console.log(getUserData('AhmedAbuSharar'));
    // console.log(userData ,setUserData)
    useEffect(() =>{
        const username = "AhmedAbuSharar";
        getUserData(username)
            .then(data => setUserData(data))
       
    },[]);



    if(!userData){
        return (
            <div>loading...</div>
        ) 
    }
    const { avatar_url, login, followers } = userData;

        return (
            <div>
                <p> Hello</p> 
                <img className="img" src={avatar_url}></img>
                <h2 >username: {login}</h2>
                <h2>followers: {followers}</h2>

            {/*More stuff here!*/}
            </div>
          )
    

};



export default UserHeader;