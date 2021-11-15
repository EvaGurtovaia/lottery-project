import React, { Component } from "react";
import LotteryBall from "./LotteryBall";

class Lottery extends Component {
    render() {
        return (
            <div>
                <LotteryBall nums={2} />
                <LotteryBall nums={7} />
                <LotteryBall nums={17} />
                <LotteryBall nums={5} />
            </div>
        );
    }
}
export default Lottery;
