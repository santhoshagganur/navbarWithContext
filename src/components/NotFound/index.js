// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          {isDarkTheme ? (
            <>
              <Navbar />

              <div className="not-found-container-dark">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                  className="not-found"
                />
                <h1 className="not-found-heading-dark"> Lost Your Way? </h1>
                <p className="not-found-content-dark">
                  We cannot seem to find the page you are looking for.
                </p>
              </div>
            </>
          ) : (
            <>
              <Navbar />
              <div className="not-found-container-light">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                  className="not-found"
                />
                <h1 className="not-found-heading-light"> Lost Your Way? </h1>
                <p className="not-found-content-light">
                  We cannot seem to find the page you are looking for.
                </p>
              </div>
            </>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
