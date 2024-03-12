/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'

const BlogCards = ({ blogs, selectedCategory }) => {
  
  const filteredBlogs = blogs.filter((blogs) => blogs.category === selectedCategory || !selectedCategory)
  
  const blogCard = filteredBlogs.map((blog) => {
    return <Link to={`/blog/${blog.id - 3}`} key={blog.id} className='p-3 shadow-lg rounded cursor-pointer'>
      <div>
        <img src={blog.image} alt={blog.title} className='w-full' />
      </div>
      <h3 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>{blog.title}</h3>
      <p className='mb-2 text-gray-500'><FaUser className='inline-flex items-center mr-2'/>{blog.author}</p>
      <p className='text-sm text-gray-500'>Published: {blog.published_date}</p>
    </Link>
  })
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4'>
      {blogCard}
    </div>
  )
}
export default BlogCards
