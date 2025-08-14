import { Link } from "react-router-dom";

const Navbar = () => {
    return ( <div style={{display:"flex",gap:"20px", textAlign:"center"}}>
        <Link to="/">Home</Link>
        <Link to="/userList">userList</Link>
        <Link to="/posts">Posts</Link>
    </div> );
}
 
export default Navbar;