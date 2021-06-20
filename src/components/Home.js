import {useState,useEffect} from 'react'
import BlogList from './BlogList';
const Home = () => {

    let [blogs,setBlogs] = useState([
        {title:'My new Website',body:'lorem ipsum...',author:'mario',id:1},
        {title:'My old Website',body:'lorem ipsum...',author:'mahant ji',id:2},
        {title:'My new Hotel',body:'lorem ipsum...',author:'shukla ji',id:3}
    ]);

    let handleDelete = (id) => {
        let newBlogs = blogs.filter(blog => blog.id != id);
        setBlogs(newBlogs);
    }
    useEffect(()=>{ //this function reuns with every render
        //prescribed to not change state in this beacause it will call rerenderwhich again call this function and we stuck in a continuous loop
        console.log('use effect run');
        console.log(blogs);
    });
    return (
        <>
           <div className="home">
              <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete}/>
              {/* <BlogList blogs={blogs.filter((blog) => blog.author ==='mario')} title='Mario Blogs'/> */}
            </div> 
        </>
    )
}

export default Home
