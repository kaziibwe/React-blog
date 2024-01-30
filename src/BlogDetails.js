import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    // hadle single get request
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);
    // rediction
    const history=useHistory();

    // hadle delete
    const handleClick =() =>{
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'         
        })
        .then(()=>{
            history.push('/')
        })
    }

    return (
        <div className="blog-details">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blog && (
               <article>
                <h2>{blog.title}</h2>
                <p>Writen by {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleClick}> Delete</button>
               </article>
            )}
        </div>
    );
}

export default BlogDetails;