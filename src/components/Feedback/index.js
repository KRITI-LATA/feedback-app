// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {changeFeedback: true}

  showresult = () => {
    this.setState({changeFeedback: false})
  }

  render() {
    const {changeFeedback} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="bg-container">
        {changeFeedback ? (
          <div className="container-card">
            <h1 className="heading-text">
              How satisfied are you with our customer support performance
            </h1>
            <ul className="list-container">
              {emojis.map(eachItem => (
                <li key={eachItem.id} className="list-card">
                  <button
                    type="button"
                    className="btn"
                    onClick={this.showresult}
                  >
                    <img
                      src={eachItem.imageUrl}
                      alt={eachItem.name}
                      className="image-card"
                    />
                    <p className="name-card">{eachItem.name}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="card-container">
            <img src={loveEmojiUrl} alt="love emoji" className="image-card" />
            <h1 className="head-card">Thank You!</h1>
            <p className="text-card">
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback
