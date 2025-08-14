import axios from "axios";
import { useEffect, useState } from "react";

const Posts = () => {
    
    const [page, setPage] = useState(1);
    const [posts,setPosts] = useState([]);
    function getPosts(){
        async function getPosts() {
            try {
                let response = await axios.get(
                  `https://jsonplaceholder.typicode.com/posts`
                );
                setPosts(response.data);
                console.log(response.data);
            } catch (error) {
                
            }
        }
        getPosts();
    }

    useEffect(() => {
        getPosts();
    },[])


    const postPerPage = 10 ;
    const pages = Math.ceil(posts.length / postPerPage);
    const indexOflastPost = page * postPerPage;
    const indexOfFirstPost = indexOflastPost - postPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOflastPost);

    function nextPage() {
        setPage(page + 1);
      }
    
      function prevPage() {
        setPage(page - 1);
      } 

    return ( <div style={{display:"flex",gap:"20px", textAlign:"center", flexWrap:"wrap" ,flexDirection:"row"}}>
        <h1>Posts</h1>
       <div style={{display:"flex",gap:"20px", textAlign:"center", flexWrap:"wrap" ,border:"1px solid black" , borderRadius:"10px" , justifyContent:"center" , backgroundColor:"gray" , borderRadius:"30px"}}>
        
        
        {currentPosts.map((post) => (
            <div key={post.id} style={{border:"1px solid black", padding:"20px", margin:"10px", backgroundColor:"lightseagreen" , width:"300px", borderRadius:"30px"}}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        ))}
        </div>

        <div>
        <button style={{margin:"10px"}} onClick={prevPage} disabled={page === 1}>Prev</button>
        <button style={{margin:"10px"}} disabled={page === pages} onClick={nextPage}>Next</button>

        </div>

        
    </div> );
}
 
export default Posts;