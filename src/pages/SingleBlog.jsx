import { FaUser } from "react-icons/fa6";
import { LuClock } from "react-icons/lu";
import { useLoaderData } from "react-router-dom"
import SideBar from "../components/SideBar";

const SingleBlog = () => {
  const data = useLoaderData();
  
  const { title, image, author, published_date, content } = data;
  


  return (
    <div>
       <div className="px-4 py-32 bg-black mx-auto">
          <div className="text-white text-center">
            <h1 className="text-5xl lg:text-7xl font-bold leading-snug mb-5">Single Blog Page</h1>
          </div>
        </div>
        {/** Blog Details */}
        <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
          <div className="lg:w-3/4 mx-auto">
            <div>
              <img src={image} alt="" className="w-full mx-auto rounded" />
            </div>
            <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">{title}</h2>
            <p className="mb-3 text-gray-600"><FaUser className="inline-flex items-center mr-2" />{author} | <LuClock className=" inline-flex items-center mx-2" />{published_date}</p>
            <p className="text-base text-gray-500 mb-6">{content}</p>
            <div className="text-base text-gray-500 mb-6">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quidem in mollitia natus, fugiat minima tempora? Consequatur exercitationem soluta et. Deleniti numquam culpa ratione odit voluptate autem temporibus ipsum eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quidem in mollitia natus, fugiat minima tempora? Consequatur exercitationem soluta et. Deleniti numquam culpa ratione odit voluptate autem temporibus ipsum eveniet.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quidem in mollitia natus, fugiat minima tempora? Consequatur exercitationem soluta et. Deleniti numquam culpa ratione odit voluptate autem temporibus ipsum eveniet.</p> <br />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quidem in mollitia natus, fugiat minima tempora? Consequatur exercitationem soluta et. Deleniti numquam culpa ratione odit voluptate autem temporibus ipsum eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quidem in mollitia natus, fugiat minima tempora? Consequatur exercitationem soluta et. Deleniti numquam culpa ratione odit voluptate autem temporibus ipsum eveniet.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quidem in mollitia natus, fugiat minima tempora? Consequatur exercitationem soluta et. Deleniti numquam culpa ratione odit voluptate autem temporibus ipsum eveniet.</p> <br />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quidem in mollitia natus, fugiat minima tempora? Consequatur exercitationem soluta et. Deleniti numquam culpa ratione odit voluptate autem temporibus ipsum eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quidem in mollitia natus, fugiat minima tempora? Consequatur exercitationem soluta et. Deleniti numquam culpa ratione odit voluptate autem temporibus ipsum eveniet.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quidem in mollitia natus, fugiat minima tempora? Consequatur exercitationem soluta et. Deleniti numquam culpa ratione odit voluptate autem temporibus ipsum eveniet.</p> <br />
            </div>
          </div>
          <div className="lg:w-1/4">
            <SideBar />
          </div>
        </div>
    </div>
  )
}

export default SingleBlog
