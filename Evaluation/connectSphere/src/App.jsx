import { useState , useEffect , createContext ,Provider } from 'react';
import UserList from './components/UserList';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import {Link , Navigate} from 'react-router-dom';
import Posts from './components/Posts';

export const AppContext = createContext();

export function AppContextProvider({children}) {
  const [data, setData] = useState([]);
  const [loading , setLoading] = useState(false);
  const [error,setError] = useState(null);
  
  async function fetchData() {
    try {
      setLoading(true)
      let response = await axios.get('https://jsonplaceholder.typicode.com/users') ;
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  }
  
  useEffect(() => {
    fetchData();
  },[]);
 
  return (
    <AppContext.Provider value={{data ,loading ,error }}>
      {children}
    </AppContext.Provider>
  )
  
}

function App() {

  return (
    <>
      <div>
        <AppContextProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userList" element={<UserList />} />
          <Route path="/posts" element={<Posts/>} />
        </Routes>
        </AppContextProvider>
      </div>     
    </>
  )
}

export default App
