
import useFetch from '../useFetch';
import BlogList from './BlogList';
const Home = () => {
    let {data:blogs,isPending,error} = useFetch('http://localhost:8000/blogs')



    // let handleDelete = (id) => {
    //     let newBlogs = blogs.filter(blog => blog.id != id);
    //     setBlogs(newBlogs);
    // }
    //this is a hook
  
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
