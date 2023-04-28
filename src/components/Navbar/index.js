// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {toggleTheme, isDarkTheme} = value

      const changeTheme = () => {
        toggleTheme()
      }

      return (
        <>
          {isDarkTheme ? (
            <div className="navbar-container-dark">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
                className="website-logo"
              />

              <ul className="tabs-container">
                <Link to="/" className="link-item">
                  <li className="tab-content-dark"> Home </li>
                </Link>
                <Link to="/about" className="link-item">
                  <li className="tab-content-dark"> About </li>
                </Link>
              </ul>

              <button
                type="button"
                className="theme-btn"
                onClick={changeTheme}
                data-testid="theme"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  className="website-logo"
                  alt="theme"
                />
              </button>
            </div>
          ) : (
            <div className="navbar-container-light">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
                className="website-logo"
              />

              <ul className="tabs-container">
                <Link to="/" className="link-item">
                  <li className="tab-content-light"> Home </li>
                </Link>
                <Link to="/about" className="link-item">
                  <li className="tab-content-light"> About </li>
                </Link>
              </ul>

              <button
                type="button"
                className="theme-btn"
                onClick={changeTheme}
                data-testid="theme"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  className="website-logo"
                  alt="theme"
                />
              </button>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
