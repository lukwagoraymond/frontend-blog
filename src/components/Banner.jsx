import { Link } from 'react-router-dom'; import { FaArrowRight } from 'react-icons/fa6';


const Banner = () => {
  return (
    <div className="px-4 py-32 bg-black mx-auto">
      <div className="text-white text-center">
        <h1 className="text-5xl lg:text-7xl font-bold leading-snug mb-5">WELCOME TO DEV</h1>
        <p className="text-xl lg:text-2xl leading-snug font-medium mb-5 font-primary">Start your fashion journey today and join a community of creators and customers who are passionate about sharing their products and ideas. We offer everything you need to get started, from helpful tips and tutorials to 3D body measurement models to fasten your production pipelines</p>
        <div>
          <Link to='/about' className='font-medium hover:text-orange-500 inline-flex items-center py-1'>Learn more <FaArrowRight className='mt-1 ml-2'/></Link>
        </div>
      </div>
    </div>
  )
}

export default Banner
