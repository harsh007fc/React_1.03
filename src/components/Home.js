import {useState} from 'react'
const Home = () => {

    let [blogs,setBlogs] = useState([
        {title:'My new Website',body:'lorem ipsum...',author:'mario',id:1},
        {title:'My old Website',body:'lorem ipsum...',author:'mahant ji',id:2},
        {title:'My new Hotel',body:'lorem ipsum...',author:'shukla ji',id:3}
    ]);
    return (
        <>
           <div className="home">
              {
                  blogs.map((blog) => (
                      <div className="blog-preview" key={blog.id}>
                          <h2>{blog.title}</h2>
                          <p>Written By {blog.author}</p>
                      </div>
                  ))
              }
            </div> 
        </>
    )
}

export default Home
