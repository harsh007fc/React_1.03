import {useState,useEffect} from 'react'
import BlogList from './BlogList';
const Home = () => {

    let [blogs,setBlogs] = useState(null);



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
            setBlogs(data)
        })
    },[]);
    return (
        <>
           <div className="home">
              { blogs && <BlogList blogs={blogs} title='All Blogs'/>}
            </div> 
        </>
    )
}

export default Home
