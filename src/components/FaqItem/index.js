/* eslint-disable jsx-a11y/control-has-associated-label */
// Write your code here.

import {Component} from 'react'
import './index.css'

const plusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isCardActive: false}

  toggle = () => {
    const {isCardActive} = this.state
    this.setState({isCardActive: !isCardActive})
  }

  getImage = () => {
    const {isCardActive} = this.state
    const image = isCardActive ? minusImg : plusImg
    return image
  }

  render() {
    const {eachFaq} = this.props
    const {questionText, answerText} = eachFaq
    const {isCardActive} = this.state

    const img = this.getImage()

    const altValue = isCardActive ? 'minus' : 'plus'

    return (
      <li className="faq-item">
        <div className="question-btn-container">
          <h1 className="question">{questionText}</h1>
          <button onClick={this.toggle} type="button">
            <img src={img} alt={altValue} />
          </button>
        </div>
        {isCardActive && <p className="answer">{answerText}</p>}
      </li>
    )
  }
}
export default FaqItem
