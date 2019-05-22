class Timer extends React.Component {
    constructor (props) {
      super(props)
      this.state = {time: 0}
    }
    // componentWillUnmount () {
    //   clearInterval(this.timer)
    // }
    tick () {
      this.setState({time: (this.state.time+ 1)})
    }
    startTimer () {
      clearInterval(this.timer)
      this.timer = setInterval(this.tick.bind(this), 1000)
    }
    stopTimer () {
      clearInterval(this.timer)
    }
    render () {
      return (
        <div className='timer'>
          <h1>{this.state.count}</h1>
          <div>
            <button onClick={this.startTimer.bind(this)}>Start</button>
            <button onClick={this.stopTimer.bind(this)}>Stop</button>
          </div>
        </div>
      )
    }
  }
  