import React from 'react';
import classNames from "classnames";
import "./input.css"

type InputProps = {
    title: string,
    value: string | any,
    onFocus: ()=>any,
    onChange: (e:any)=>any,
    className?: string,
    placeholder: string,
    holdText?: string,
    warning?: string
}

const Input = ({title, value, onFocus, onChange, className = "", placeholder, holdText= "", warning = ""}: InputProps) => {
    return <div className={classNames('row', className)}>
        <label style={{marginLeft:0}} className = "input-label">
            {title}
        </label>
        <div className = {classNames("input-container", warning)} >
            {holdText && <div className = "hold-text">{holdText}</div>}
            <input onFocus={onFocus} className={"input-value"} value={value} onChange={onChange} placeholder = {placeholder}/>
        </div>
        
    </div>
}

export default Input;