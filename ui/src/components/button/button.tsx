import classNames from 'classnames';
import React from 'react';
import "./button.css"

type buttonProps = {
    onClick:()=>any,
    text: string,
    disable?: boolean
}

const Button = ({onClick, text, disable = false}: buttonProps) => {
    return  <div className="button-box">
        <div
            className={classNames("button", {"success": disable}) }
            onClick={!disable ? onClick : ()=>{}}
        >
        {text}

    </div>
</div>
   
}

export default Button;