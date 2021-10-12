import React from 'react';

type Direction = 'left' | 'right' | 'up' | 'down';


export const leftArrow = <svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.2392 21.8001L2.09155 11.6001L12.2392 1.40015" stroke="#36435F" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round"/>
</svg>;

export const rightArrow = <svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.75783 1.19985L11.9055 11.3999L1.75783 21.5999" stroke="#36435F" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round"/>
</svg>;

export const downArrow = <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M11 1L6 6L1 1" stroke="#36435F" strokeWidth="2" strokeLinecap="round"/>
</svg>

export const upArrow = <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M11 7L6 2L1 7" stroke="#36435F" strokeWidth="2" strokeLinecap="round"/>
</svg>;

type ArrowProps = {
    fillColor?: string,
    onClickHandler?:()=>void
    strokeOpacity?: string
    strokeWidth?: string
}
export function UpArrow({fillColor="#36435F", onClickHandler, strokeWidth="2"}: ArrowProps){
    return <svg onClick={onClickHandler} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.8" d="M11 7L6 2L1 7" stroke={fillColor} strokeWidth={strokeWidth} strokeLinecap="round"/>
    </svg>;
} 

export function DownArrow({fillColor="#36435F", onClickHandler, strokeWidth="2"}: ArrowProps){
    return <svg onClick={onClickHandler} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.8" d="M11 1L6 6L1 1" stroke={fillColor} strokeWidth={strokeWidth} strokeLinecap="round"/>
    </svg>
} 

export function LeftArrow({fillColor="#36435F", onClickHandler, strokeOpacity="0.2", strokeWidth="2"}: ArrowProps){
    return <svg onClick={onClickHandler} width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.2392 21.8001L2.09155 11.6001L12.2392 1.40015" stroke={fillColor} strokeOpacity={strokeOpacity} strokeWidth={strokeWidth} strokeLinecap="round"/>
    </svg>;
}

export function RightArrow({fillColor="#36435F", onClickHandler, strokeOpacity="0.2", strokeWidth="2"}: ArrowProps){
    return <svg onClick={onClickHandler} width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.75783 1.19985L11.9055 11.3999L1.75783 21.5999" stroke={fillColor} strokeOpacity={strokeOpacity} strokeWidth={strokeWidth} strokeLinecap="round"/>
    </svg>;
}

type ArrowSvgProps = {
    className?: string,
    direction: Direction,
    fillColor?: string,
    onClickHandler?:()=>void,
    strokeOpacity?: string
    strokeWidth?: string
}
export default function ArrowSvg({direction, fillColor, onClickHandler, strokeOpacity, strokeWidth}: ArrowSvgProps){

    return(
        // choose arrow to display according to input param isLeftArrow
        <>
        {direction === 'left' && <LeftArrow fillColor={fillColor} onClickHandler={onClickHandler} strokeOpacity={strokeOpacity} strokeWidth={strokeWidth}/>}
        {direction === 'right' && <RightArrow fillColor={fillColor} onClickHandler={onClickHandler} strokeOpacity={strokeOpacity} strokeWidth={strokeWidth}/>}
        {direction === 'up' && <UpArrow fillColor={fillColor} onClickHandler={onClickHandler} strokeWidth={strokeWidth}/>}
        {direction === 'down' && <DownArrow fillColor={fillColor} onClickHandler={onClickHandler} strokeWidth={strokeWidth}/>}
        </>
    )
} 