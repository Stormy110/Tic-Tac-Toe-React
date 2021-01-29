import React from 'react';

function Box(props) {
    return (
        <button className="board_box" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export default Box;