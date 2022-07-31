// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiItem, selectedEmoji} = props
  const {emojiUrl, emojiName, id} = emojiItem
  const onClickEmoji = () => {
    selectedEmoji(id)
  }
  return (
    <li className="card-container">
      <button type="button" className="button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}
export default EmojiCard
