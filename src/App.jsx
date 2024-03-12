
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'; import Login from './pages/Login'; import SignUp from './pages/SignUp';
import BlogCreate from './components/createBlog'; import About from './pages/About';
import Blogs from './pages/Blogs'; import Contact from './pages/Contact'; import Services from './pages/Services'; import Layout from './pages/Layout';
import SingleBlog from './pages/SingleBlog';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='blog' element={<Blogs />}></Route>
          <Route path='contact-form' element={<Contact />}></Route>
          <Route path='services' element={<Services />}></Route>
          <Route path='blog/:id' element={<SingleBlog />}
            loader={({params}) => fetch(`http://localhost:3000/${params.id}`)}></Route>
        </Route>
        <Route path='/signin' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/blog-create' element={<BlogCreate />}></Route>
      </>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
