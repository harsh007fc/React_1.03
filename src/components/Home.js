import {useState,useEffect} from 'react'
import BlogList from './BlogList';
const Home = () => {

    let [blogs,setBlogs] = useState(null);
    let [isPending,setIsPending] = useState(true);



    // let handleDelete = (id) => {
    //     let newBlogs = blogs.filter(blog => blog.id != id);
    //     setBlogs(newBlogs);
    // }
    //this is a hook
    useEffect(()=>{ 
        fetch('http://localhost:8000/blogs')
        .then(res=>{
           return res.json();
        }).then((data)=>{
            setBlogs(data);
            setIsPending(false); 
        })
    },[]);
    return (
        <>
           <div className="home">
               {isPending && <div>Loading...</div>}
              { blogs && <BlogList blogs={blogs} title='All Blogs'/>}
            </div> 
        </>
    )
}

export default Home
