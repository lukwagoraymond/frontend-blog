import BlogContextProvider from '../components/BlogContext';
//import BlogPage from '../components/BlogPage';
import BlogPgSudo from '../components/BlogPgSudo';

const Blogs = () => {
  
  return (
    <div>
      <div className="px-4 py-32 bg-black mx-auto">
        <div className="text-white text-center">
          <h1 className="text-5xl lg:text-7xl font-bold leading-snug mb-5">Blogs Page</h1>
        </div>
      </div>
      <div className='max-w-7xl mx-auto'>
        <BlogContextProvider>
          <BlogPgSudo />
        </BlogContextProvider>
      </div>
    </div>
    
  )
}

export default Blogs
