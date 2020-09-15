import React from 'react'

const Square = (props) => {

    const style = props.className ? `${props.className} square` : 'square';

    return (
        <span className={style} onClick={props.onClick}>
            {props.state}
        </span>
    )
}

export default Square
