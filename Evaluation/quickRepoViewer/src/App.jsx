import { useContext, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import axios from "axios";
import RepoCard from "./components/RepoCard";
import themeContext from "./components/Context";

function App() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState([]);
  const [loading, setlaoding] = useState(false);
  const [error, setError] = useState(null);

  const {theme , setTheme} = useContext(themeContext);

  async function fetchData() {
    try {
      setlaoding(true);
      let response = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      setData(response.data);
      setlaoding(false);
    } catch (error) {
      setlaoding(false);
      setError(error.message);
      console.log(error.message);
    }
  }

  function handleChange(e) {
    console.log(username);
    setUsername(e.target.value);
    console.log(username);
    // console.log(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    fetchData();
    console.log(data);
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  // if (error) {
  //   return <h1>{error}</h1>;
  // }

  return (
    <>
    <div style={{display:"flex" , justifyContent:"center" ,width:"100%" ,height:"50px" , backgroundColor: theme === "light" ? "cadetblue" : "black"}}>
      <button >Change Theme</button>
    </div>
      <div>
        <h2 style={{color:"cadetblue" , fontSize:"80px"}}>Quick Repo Viewer</h2>
        <form style={{textAlign:"center"}}>
          <input type="search" name="search" placeholder="Enter GitHub Username" onChange={handleChange} style={{marginRight:"10px" , backgroundColor:"white" , width : "300px" , padding:"2px 10px" , height:"30px" ,border:"1px solid cadetblue" , backdropFilter:"blur(10px)" , borderRadius:"20px" , color:"black"}}/>
          <button style={{backgroundColor:"cadetblue" , color:"Black" , padding:"2px 10px"}} onClick={handleClick}>Search</button>
        </form>
      </div>

      <div>
        <RepoCard data={data} />
      </div>
    </>
  );
}

export default App;
