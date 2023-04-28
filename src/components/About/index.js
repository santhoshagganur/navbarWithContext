// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          {isDarkTheme ? (
            <>
              <Navbar />
              <div className="about-container-dark">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                  className="about-img"
                  alt="about"
                />
                <h1 className="about-heading-dark"> About </h1>
              </div>
            </>
          ) : (
            <>
              <Navbar />
              <div className="about-container-light">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                  className="about-img"
                  alt="about"
                />
                <h1 className="about-heading-light"> About </h1>
              </div>
            </>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
