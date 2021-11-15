import React, { Component } from "react";
import LotteryBall from "./LotteryBall";
import "./Lottery.css";

class Lottery extends Component {
    static defaultProps = {
        title: "Lottery",
        numBalls: 6,
        maxNums: 40,
    };
    constructor(props) {
        super(props);
        this.state = { nums: Array.from({ length: this.props.numBalls }) };
        this.handleClick = this.handleClick.bind(this);
    }

    generate() {
        this.setState((curState) => ({
            nums: curState.nums.map(
                (n) => Math.floor(Math.random() * this.props.maxNums) + 1
            ),
        }));
    }

    handleClick() {
        this.generate();
    }
    render() {
        return (
            <div className="Lottery">
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.nums.map((n) => (
                        <LotteryBall num={n} />
                    ))}
                </div>
                <button onClick={this.handleClick}>Generate!</button>
            </div>
        );
    }
}
export default Lottery;
