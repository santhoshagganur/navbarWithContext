// Write your code here
import './index.css'

const Navbar = () => (
  <div className="navbar-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
      alt="website-logo"
      className="website-logo"
    />

    <ul className="tabs-container">
      <li className="tab-content"> Home </li>
      <li className="tab-content"> About </li>
    </ul>

    <img
      src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
      className="website-logo"
      alt="website-theme"
    />
  </div>
)

export default Navbar
