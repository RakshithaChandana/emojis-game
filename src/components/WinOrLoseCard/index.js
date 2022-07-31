// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, reset} = props

  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const resultText = isWon ? 'You Won' : 'You Lose'
  const scoreStatus = isWon ? 'Best Score' : 'Score'

  const onClickPlayAgain = () => {
    reset()
  }

  return (
    <div className="win-lose-container">
      <div className="text-container">
        <h1 className="heading">{resultText}</h1>
        <p className="best-score-heading">{scoreStatus}</p>
        <p className="score">{score}/12</p>
        <button
          className="play-button"
          type="button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <img src={imageUrl} alt="win or lose" className="win-lose-image" />
    </div>
  )
}
export default WinOrLoseCard
