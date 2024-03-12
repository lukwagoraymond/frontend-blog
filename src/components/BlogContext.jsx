/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react'

export const BlogContext = createContext('')

const BlogContextProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return (
    <BlogContext.Provider value={{blogs, loading}}>
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContextProvider
