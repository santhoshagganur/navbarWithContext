// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          {isDarkTheme ? (
            <>
              <Navbar />
              <div className="home-container-dark">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                  className="website logo"
                  alt="home"
                />
                <h1 className="home-heading-dark"> Home </h1>
              </div>
            </>
          ) : (
            <>
              <Navbar />
              <div className="home-container-light">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                  className="website logo"
                  alt="home"
                />
                <h1 className="home-heading-light"> Home </h1>
              </div>
            </>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
