import { useState, useContext } from 'react'
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar';
import { BlogContext } from './BlogContext';

const BlogPgSudo = () => {
  const { blogs, loading } = useContext(BlogContext)
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(9);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

 

  //Handling Category Changes 
  const handlePageCategory = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  }
  if(loading) return <h1>Loading...</h1>;

  const lastBlogIndex = (currentPage * recordsPerPage);
  const firstBlogIndex = (lastBlogIndex - recordsPerPage);
  const currentBlogs = blogs.slice(firstBlogIndex, lastBlogIndex);
  const numberOfPages = Math.ceil(blogs.length / recordsPerPage);
  return (
    <div>
      {/** Blog category section */}
      <div>
        <CategorySelection onSelectCategory={handlePageCategory} activeCategory={activeCategory}/>
      </div>

      {/** Blog section */}
      <div className='flex flex:col lg:flex-row gap-12'>
        {/** Blog Cards section */}
        <BlogCards blogs={currentBlogs} selectedCategory={selectedCategory} />
        {/** SideBar Component */}
        <div><SideBar /></div>
      </div>

      {/** Pagination section */}
      <div className='pt-4'><Pagination 
        numberOfPages={numberOfPages} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}/>
      </div>
    </div>
  )
}

export default BlogPgSudo
