import { NavLink } from 'react-router-dom'

// simple horizontal navbar. white background and a line at the bottom.
// active link gets colored in dark navy so you know where you are.
export default function Navbar() {
  // had to look this up, react-router NavLink gives us an isActive state in className
  // this is way easier than setting up my own state with onClick
  const getLinkClass = ({ isActive }) => {
    return isActive 
      ? 'text-blue-900 font-semibold border-b-2 border-blue-900 pb-2 text-sm' 
      : 'text-gray-500 hover:text-gray-900 pb-2 text-sm transition-colors'
  }

  return (
    <nav className="bg-white border-b border-gray-200 py-4 px-6 flex justify-between items-center">
      <div className="font-bold text-gray-900 text-base">
        Internship App
      </div>
      <div className="flex gap-6">
        <NavLink to="/" className={getLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={getLinkClass}>
          About
        </NavLink>
        <NavLink to="/contact" className={getLinkClass}>
          Contact
        </NavLink>
      </div>
    </nav>
  )
}
