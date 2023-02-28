// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncreament = () => {
    this.setState(prevState => {
      console.log(`Previous state value ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div>
          <h1 className="heading">
            The Button has been clicked <br />{' '}
            <span className="counter">{count}</span> times
          </h1>
          <p className="para">Click the button to increase the count!</p>
          <button onClick={this.onIncreament} className="button" type="button">
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
