import {useState,useEffect} from 'react'
import BlogList from './BlogList';
const Home = () => {

    let [blogs,setBlogs] = useState(null);
    let [isPending,setIsPending] = useState(true);
    let [error,setError] = useState(null);



    // let handleDelete = (id) => {
    //     let newBlogs = blogs.filter(blog => blog.id != id);
    //     setBlogs(newBlogs);
    // }
    //this is a hook
    useEffect(()=>{ 
        fetch('http://localhost:8000/blogs')
        .then(res=>{
            console.log(res);
            if(!res.ok){
                throw Error('Could not fetch the data for that resource')
            }
           return res.json();
        }).then((data)=>{
            setBlogs(data);
            setIsPending(false); 
            setError(null)
        }).catch((err)=>{
            setIsPending(false); 
            setError(err.message);
        }); 
    },[]);
    return (
        <>
           <div className="home">
               {error && <div>{ error }</div> }
               {isPending && <div>Loading...</div>}
              { blogs && <BlogList blogs={blogs} title='All Blogs'/>}
            </div> 
        </>
    )
}

export default Home
