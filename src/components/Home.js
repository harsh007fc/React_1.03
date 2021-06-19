import {useState} from 'react'
import BlogList from './BlogList';
const Home = () => {

    let [blogs,setBlogs] = useState([
        {title:'My new Website',body:'lorem ipsum...',author:'mario',id:1},
        {title:'My old Website',body:'lorem ipsum...',author:'mahant ji',id:2},
        {title:'My new Hotel',body:'lorem ipsum...',author:'shukla ji',id:3}
    ]);
    return (
        <>
           <div className="home">
              <BlogList blogs={blogs} title='All Blogs'/>
            </div> 
        </>
    )
}

export default Home
