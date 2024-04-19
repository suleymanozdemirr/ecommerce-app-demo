import { useState } from "react"
import logo from "../assets/logo.png"
import { BsSearch } from "react-icons/bs"
import { FaCartShopping } from "react-icons/fa6"
import { FaUser, FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const navItems = [
    { id: 1, title: "Elektronik", link: "/" },
    { id: 2, title: "Moda", link: "/" },
    { id: 3, title: "Ev & Yaşam", link: "/" },
    { id: 4, title: "Kozmetik", link: "/" },
    { id: 5, title: "Süpermarket", link: "/" },
    { id: 6, title: "Oyuncak", link: "/" },
    { id: 7, title: "Spor & Outdoor", link: "/" },
    { id: 8, title: "Hediye", link: "/" },
    { id: 9, title: "Kitap", link: "/" },
  ]
  return (
    <header className="shadow-sm sticky z-[100] top-0 transition-all duration-500 bg-orange-300 xl:px-20 px-3">
      <div className="flex items-center justify-between md:py-4 pt-6 pb-3">
        {/* logo */}
        <div>
          <a
            href="/"
            className="font-bold text-2xl sm:text-3xl flex items-center gap-2"
          >
            <img src={logo} alt="Logo" className="w-16" />
            E-Shop
          </a>
        </div>

        {/* search bar */}
        <div className="relative hidden sm:block">
          <input
            type="text"
            placeholder="search"
            className="w-[200px] sm:w-[200px] hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
          />
          <BsSearch className="text-Black hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer" />
        </div>

        {/* order button */}
        <div className="md:flex items-center gap-4 hidden">
          <div className="bg-black py-3 px-6 rounded-2xl text-white flex items-center gap-3">
            <FaUser className="text-xl text-white cursor-pointer" />
          </div>
          <button className="bg-black py-3 px-6 rounded-2xl text-white flex items-center gap-3">
            <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
          </button>
        </div>

        {/* mobile menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="w-5 h-5 text-Black" />
            ) : (
              <FaBars className="w-5 h-5 text-Black" />
            )}
          </button>
        </div>
      </div>

      <hr />

      {/* category items */}
      <div className="flex justify-center py-4">
        <ul className="lg:flex md:flex hidden items-center gap-8">
          {navItems.map((data) => (
            <li key={data.id} className="hover:text-white">
              <Link to={data.link}>{data.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* mobile menu */}
      <div>
        <ul
          className={`text-center text-Black px-4 py-2 -mt-6 rounded ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          {navItems.map((data) => (
            <li key={data.id} className="my-4">
              <Link
                to={data.link}
                className="hover:text-white hover:border-b hover:border-b-secondary "
              >
                {data.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
