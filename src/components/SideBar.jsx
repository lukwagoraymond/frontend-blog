import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";

const SideBar = () => {
  const[popularBlogs, setPopularBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5173/db/blogsData.json')
    .then(response => response.json())
    .then(data => setPopularBlogs(data.slice(0, 15)))
  }, [])

  return (
    <div>
      {/** Latest Blogs */}
      <div>
        <h3 className="text-2xl font-semibold px-4">Latest Blogs</h3>
        <div>
          {
            popularBlogs.slice(0,5).map((blog) => <div key={blog.id} className="my-3 border-b-2 border-spacing-2 px-4">
              <h4 className="font-medium mb-2">{blog.title}</h4>
              <Link to="/" className="text-base pb-2 hover:text-orange-500 inline-flex items-center">Read now <FaArrowRight className="mt-1 ml-2" /></Link>
            </div>)
          }
        </div>
      </div>
      {/** Popular Blogs */}
      <div>
        <h3 className="text-2xl font-semibold px-4">Popular Blogs</h3>
        <div>
          {
            popularBlogs.slice(5,10).map((blog) => <div key={blog.id} className="my-3 border-b-2 border-spacing-2 px-4">
              <h4 className="font-medium mb-2">{blog.title}</h4>
              <Link to="/" className="text-base pb-2 hover:text-orange-500 inline-flex items-center">Read now <FaArrowRight className="mt-1 ml-2" /></Link>
            </div>)
          }
        </div>
      </div>
    </div>
  )
}

export default SideBar
