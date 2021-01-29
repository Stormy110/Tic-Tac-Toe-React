import React from 'react';
import { Link } from 'react-router-dom';

import Storage from '../Storage/Storage';

import Box from './Board-box';

import * as utils from './../utils';

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            boxes: Array(9).fill(null),
            history: [],
            xIsNext: true
        }
    }
    // create instance of storage
    storage = new Storage()
    // handle click on boxes on the board
    handleBoxClick(index) {
        // get the current state of boxes
        const boxes = this.state.boxes.slice()
        // get the current state of history
        let history = this.state.history
        // stops the game if board contains winning combination
        if (utils.findWinner(boxes) || boxes[index]) {
            return
        }
        // stop the game if all boxes have been clicked
        if(utils.areAllBoxesClicked(boxes) === true) {
            return
        }
        // mark the box as 'x' or 'o'
        boxes[index] = this.state.xIsNext ? 'x' : 'o'
        // add move to game history
        history.push(this.state.xIsNext ? 'x' : 'o')
        // Update component state with new data
        this.setState({
            boxes: boxes,
            history: history,
            xIsNext: !this.state.xIsNext
        })
    }
    // handle board restart - set component back to intial state
     handleBoardRestart = () => {
        this.setState({
            boxes: Array(9).fill(null),
            history: [],
            xIsNext: true
        })
    }

    render() {
        // get winner ( if there is any)
        const winner = utils.findWinner(this.state.boxes)
        // Are all boxes checked?
        const isFilled = utils.areAllBoxesClicked(this.state.boxes)

        //status message
        let status;
            if (winner) {
                status = `The winner is : ${winner}`
                // push game data to storage
                this.storage.update([`${winner} won`])
            } else if(!winner && isFilled) {
                status = 'Cat Game'
                // push game data to storage
                this.storage.update(['Cat Game'])
            } else {
                status = `It is ${(this.state.xIsNext ? 'x' : 'o')}'s turn.`
            }
            return (
                <>
                {/* link to scoreboard */}
                <Link to='/' className='board-link'>Go back to scoreboard</Link>

                {/* The game board */}
                <div className="board-wrapper">
                    <div className="board">
                        <h2 className="board-heading">{status}</h2>
                        <div className="board-row">
                            <Box value={this.state.boxes[0]} onClick={()=> this.handleBoxClick(0)}/>
                            <Box value={this.state.boxes[1]} onClick={()=> this.handleBoxClick(1)}/>
                            <Box value={this.state.boxes[2]} onClick={()=> this.handleBoxClick(2)}/>
                        </div>
                        <div className="board-row">
                            <Box value={this.state.boxes[3]} onClick={()=> this.handleBoxClick(3)}/>
                            <Box value={this.state.boxes[4]} onClick={()=> this.handleBoxClick(4)}/>
                            <Box value={this.state.boxes[5]} onClick={()=> this.handleBoxClick(5)}/>
                        </div>
                        <div className="board-row">
                            <Box value={this.state.boxes[6]} onClick={()=> this.handleBoxClick(6)}/>
                            <Box value={this.state.boxes[7]} onClick={()=> this.handleBoxClick(7)}/>
                            <Box value={this.state.boxes[8]} onClick={()=> this.handleBoxClick(8)}/>
                        </div>
                    </div>
                    <div className="board-history">
                        <h2 className="board-heading">Move History:</h2>
                        <ul className="board-history-list">
                            {this.state.history.length === 0 && <span> No moves to show.</span>}
                            {this.state.history.length !== 0 && this.state.history.map((move,index)=>{
                                return <li key={index}>Move {index + 1}: <strong>{move}</strong></li>
                            })}
                        </ul>
                    </div>
                    {winner && <div className="board-footer">
                        <button className="btn" onClick={this.handleBoardRestart}>Start a new game</button>
                        </div>}
                </div>
                </>
            )
    }


}

export default Board;