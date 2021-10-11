import React from 'react'
import './toggle.css'

type checkInputEvent = {target:{checked: boolean}}

type Toggle = {
    name?: string,
    value:any,
    onChange:(event: checkInputEvent)=>any,
    className?: string,
    text: string
}
export default function Toggle({name, value, onChange, className, text}: Toggle){
    return (
        <div className = "toggle-container">
            <label className={"switch "+ className}>
                <input 
                    type="checkbox" 
                    name={name} 
                    onChange={(e)=>{
                        onChange({target:{checked: e.target.checked}})
                    }} 
                    checked={value} 
                />
                <span className="slider round"/>
            </label>
            <span className = "toggle-text">{text}</span>
        </div>
    )
}