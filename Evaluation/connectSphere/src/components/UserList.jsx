import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import UserCard from "./UserCard";
import axios from "axios";
import { useState } from "react";

const UserList = () => {
  let { data } = useContext(AppContext);
  const [id, setId] = useState(1);
  const [name, setName] = useState(" ");

//   function handleClick() {
//     async function fetchInfo() {
//       try {
//         let response = await axios.get(
//           `https://jsonplaceholder.typicode.com/posts`
//         );
//         setName(response.data);
//       } catch (error) {}
//     }
//     console.log(id);
//     console.log(name);
//     fetchInfo();
//   }

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }} >
      {data.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
