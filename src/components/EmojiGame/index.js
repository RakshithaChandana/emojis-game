/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {clickedEmojiList: [], topScore: 0, isGameProgress: true}

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > newTopScore) {
      newTopScore = currentScore
    }
    this.setState({topScore: newTopScore, isGameProgress: false})
  }

  reset = () => this.setState({isGameProgress: true, clickedEmojiList: []})

  selectedEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const isClickedEmoji = clickedEmojiList.includes(id)
    const clickedEmojisLength = clickedEmojiList.length

    if (isClickedEmoji) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else if (clickedEmojisLength === emojisList.length - 1) {
      this.finishGameAndSetTopScore(emojisList.length)
    }
    this.setState(prevState => ({
      clickedEmojiList: [...prevState.clickedEmojiList, id],
    }))
  }

  renderScoreCard = () => {
    const {clickedEmojiList} = this.state
    const {emojisList} = this.props
    const isWon = clickedEmojiList.length === emojisList.length
    return (
      <WinOrLoseCard
        reset={this.reset}
        isWon={isWon}
        score={clickedEmojiList.length}
      />
    )
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojisList = () => {
    const getShuffledEmojisList = this.shuffledEmojisList()
    return (
      <ul className="emojis-container ">
        {getShuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            emojiItem={eachEmoji}
            selectedEmoji={this.selectedEmoji}
            key={eachEmoji.id}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {isGameProgress, topScore, clickedEmojiList} = this.state
    return (
      <div>
        <div>
          <NavBar
            isGameProgress={isGameProgress}
            topScore={topScore}
            currentScore={clickedEmojiList.length}
          />
        </div>
        <div className="container">
          {isGameProgress ? this.renderEmojisList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}
export default EmojiGame
