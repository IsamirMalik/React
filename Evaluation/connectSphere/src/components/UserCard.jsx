import { useState } from "react";
import axios from "axios";
import Posts from "./Posts";
import { Navigate ,Link} from "react-router-dom";

const UserCard = ({ user }) => {
    const [posts,setPosts] = useState([]);

    function handleClick() {
        let id = user.id;
        console.log(id);

        async function fetchInfo() {
            try {
              const response = await axios.get(
                `https://jsonplaceholder.typicode.com/posts`
              );
              setPosts(response.data);
              console.log(response.data);
              
             
            } catch (error) {
                
            }
        }
        fetchInfo();
    }
  return (
    <Link onClick={handleClick} style={{backgroundColor:'lightblue' , color : 'black' , border : '1px solid black' , padding : '10px' , margin : '10px', borderRadius : '10px'}}>
      <h2 >Name :{user.name}</h2>
      <p style={{}}><strong>Email</strong> : {user.email}</p>
    </Link>
  );
};

export default UserCard;
