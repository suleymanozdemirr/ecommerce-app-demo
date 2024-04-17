import logo from "../assets/logo.png"
import { BsSearch } from "react-icons/bs"
import { FaCartShopping } from "react-icons/fa6"
const Header = () => {
  return (
    <header>
      <div className="w-[100%] shadow-sm sticky z-[100] top-0 transition-all duration-500 bg-green-200 xl:px-28 px-3">
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
            <BsSearch className="text-gray-500 hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
          </div>

          {/* order button */}
          <div className="flex justify-between items-center">
            <button className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3">
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
