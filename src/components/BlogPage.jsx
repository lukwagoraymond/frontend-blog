import { useEffect, useState } from 'react'
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(9);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    let url = `http://localhost:5173/db/blogsData.json`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error)
        setLoading(true);
      })
  }, [])

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
  console.log(currentBlogs.length);
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

export default BlogPage
