// Write your code here.
import './index.css'

const NavBar = props => {
  const {isGameProgress, currentScore, topScore} = props
  return (
    <nav className="navbar-container ">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="logo-name">Emoji Game</h1>
      </div>
      {isGameProgress && (
        <div className="score-container">
          <p className="scores">Score: {currentScore}</p>
          <p className="scores">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}
export default NavBar
