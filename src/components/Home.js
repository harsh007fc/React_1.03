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
    useEffect(()=>{ //this function reuns with every render
        //prescribed to not change state in this beacause it will call rerenderwhich again call this function and we stuck in a continuous loop
        console.log('use effect ran');
        // console.log(blogs);
        console.log(name);
    },[name]);
    return (
        <>
           <div className="home">
              <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete}/>
              <button onClick={()=>setname('Luigi')}>Change name</button>
              <p>{name}</p>
              {/* <BlogList blogs={blogs.filter((blog) => blog.author ==='mario')} title='Mario Blogs'/> */}
            </div> 
        </>
    )
}

export default Home
