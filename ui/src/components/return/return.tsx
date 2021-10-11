import React from 'react';
import "./return.css"
import ArrowSvg from "../../components/arrowsvg/arrowsvg"

type buttonProps = {
    onClick:()=>any,
    text: string,
}

const Return = ({onClick, text}: buttonProps) => {
    return  <div className="return-box" onClick = {onClick}>
        <ArrowSvg 
            direction="left" 
            fillColor="#164be9"
        />
        <div className = "return-text">{text}</div>
    </div>
}

export default Return;