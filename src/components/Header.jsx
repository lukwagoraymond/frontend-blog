import { NavLink } from "react-router-dom"
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";
import Modal from "./Modal";
import SigninForm from "./SigninForm";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true)
  }
  const hideModal = () => {
    setModalOpen(false);
  }

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  }

  /** navigation link items */
  const navItems = [
    {path: "/", link: "HOME"},
    {path: "/about", link: "ABOUT"},
    {path: "/blog", link: "BLOGS"},
    {path: "/contact-form", link: "CONTACTS"},
    {path: "/services", link: "SERVICES"}
  ]

  const navLinks = navItems.map(({path, link}) => {
    return <li className="font-light" key={path}> 
      <NavLink className={({ isActive, isPending }) => {
    return isActive ? "active" : isPending ? "pending" : "";
  }} to={path}>{link}</NavLink></li>})

  return (
    <div>
      <header className="bg-neutral-200 fixed top-0 right-0 left-0">
        <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="text-xl text-slate-600 font-medium">
            <div><h3>DEVLOOP</h3></div><div><h3>BLOG</h3></div>
          </a>
          <div className="flex gap-8">
            {/** Header navigation items */}
            <ul className="hidden md:flex flex-row gap-4 text-lg">{navLinks}</ul>
            {/** mobile menu btn, menu display for mobile screen */}
            <div className="flex flex-row gap-3 items-center">
              <div className="text-orange-500 hover:text-sky-800">
                <button type="button" onClick={showModal}><FaSearch /></button>
              </div>
              <div className="md:hidden">
                <button className="text-orange-500 cursor-pointer" onClick={toggleMenu}>
                  {isMenuOpen ? <FaXmark className="w-5 h-5"/> : <FaBars className="w-5 h-5"/>}
                </button>
              </div>
            </div>
            {/** Search Button to generate Modal */}
            <Modal show={isModalOpen} handleClose={hideModal}>
              <SigninForm />
            </Modal>
          </div>
        </nav>
        {/** menu navigation items for mobile only */}
        <div>
        <ul className={`md:hidden text-lg block space-y-4 px-4 py-6 mt-1 bg-white 
          ${isMenuOpen ? "w-full transition-all ease-out duration-150" : "hidden"}`}>
          {
            navItems.map(({path, link}) => {
              return <li className="font-light" key={path}> 
                <NavLink onClick={toggleMenu} to={path}>{link}</NavLink></li>})
          }</ul>
        </div>
      </header>
    </div>
  )
}

export default Header
