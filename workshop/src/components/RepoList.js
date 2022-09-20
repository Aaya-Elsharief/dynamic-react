import { useEffect , useState} from 'react';
import getUserData from '../utils/getUserData';

const RepoList = ({userData ,setUserData}) =>  {
    const [userRepos, setuserRepos] = useState(null);



    useEffect(() =>{
        const username = "AhmedAbuSharar";
        getUserData(username,true)
            .then(data => setuserRepos(data))
       
    },[]);

    // if(userData){
    //     console.log({userData ,setUserData});
    //     console.log(userData.repos_url);
        
    // }

    if(!userRepos){
        return (
            <div>loading...</div>
        ) 
    }
    // const { avatar_url, login, followers } = userRepos;
    return (
        <ul>{userRepos.map(repo =>  <li>{repo.name}</li>)}</ul>
       )

}


export default RepoList;