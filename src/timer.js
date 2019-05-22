import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 0,
            start: false
        }
    //    this.StartTimer = this.StartTimer.bind(this)
    //    this.PauseTimer = this.PauseTimer.bind(this)
    //    this.Reset = this.Reset.bind(this)
    }

    StartTimer = () =>{
        this.setState({
            start : true
        }) 
        this.x = setInterval(
            () => {
                this.setState({
                   time: this.state.time + 1
                })
            },
            1000
        )
    }

    PauseTimer = () =>{
        clearInterval(this.x)
        this.setState({
            start : false
        })
    }

    Reset = () =>{
       clearInterval(this.x)
       this.setState({
        time: 0
     })
    }
    render() {
        let t = this.state.time
        let hours = Math.floor((t % (60 * 60 * 24)) / (60 * 60));
        let minutes = Math.floor((t % (60 * 60)) / 60);
        let seconds = Math.floor((t % 60));


        return (<div className="phone-style">
            <div className="timer-style">
                <div className="cpnt-style">
                    <span id="hours">{hours}:</span>
                    <p>Hour</p>
                </div>


                <div className="cpnt-style">
                    <span id="miutes">{minutes}:</span>
                    <p>Minute</p>
                </div>


                <div className="cpnt-style">
                    <span id="seconds">{seconds}</span>
                    <p>Second</p>
                </div>

            </div>
            <div>
                <button class="start-button" onClick={(this.state.start)?this.PauseTimer:this.StartTimer}>Start</button>
                <button class="reset-button" onClick={this.Reset}>Reset</button>
            </div>
        </div>
        )

    }
}
export default Timer