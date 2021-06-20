import {useState,useEffect} from 'react'
import BlogList from './BlogList';
const Home = () => {

    let [blogs,setBlogs] = useState([
        {title:'My new Website',body:'lorem ipsum...',author:'mario',id:1},
        {title:'My old Website',body:'lorem ipsum...',author:'mahant ji',id:2},
        {title:'My new Hotel',body:'lorem ipsum...',author:'shukla ji',id:3}
    ]);


    let [name,setname] = useState('mario');

    let handleDelete = (id) => {
        let newBlogs = blogs.filter(blog => blog.id != id);
        setBlogs(newBlogs);
    }
    //this is a hook
    useEffect(()=>{ 
        console.log('use effect ran');
    },[]);
    return (
        <>
           <div className="home">
              <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete}/>
            </div> 
        </>
    )
}

export default Home
