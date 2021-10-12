import React, {useState} from 'react';
import './selector.css';
import ArrowSvg from "../../components/arrowsvg/arrowsvg"
import classNames from "classnames";

type selectProps = {
    className?: string,
    handleChange: (a: any) => any,
    options: any[],
    value: string | number | undefined,
    placeholder?: string,
    optionTitle?: string,
    valueText?: string,
    arrowSvg?: any,
    warning?: string,
    onFocus?: ()=>any
}

export default function Selector(
    {
        className,
        handleChange,
        options,
        value,
        placeholder,
        optionTitle,
        arrowSvg =  <ArrowSvg direction="down" fillColor="#678BFB"/>,
        warning = "",
        onFocus,
        valueText = ""
    }: selectProps
) {
    const [showDropDown, setShowDropDown] = useState(false);
    const [selectValue, setSelectValue] = useState("")

    return (
        <div className={classNames("select", className)} onClick={onFocus}>
            <div className="input-label">{optionTitle}</div>
            <div
                className={classNames("input-container", warning)}
                onClick={() => {setShowDropDown(!showDropDown)}}
                
            >
                <input
                    type="text"
                    className={"select-input"}
                    value={(selectValue || value) && `${selectValue || value} ${valueText}`}
                    disabled={true}
                    placeholder = {placeholder}
                />
                <div className={"arrow"}>
                    {arrowSvg}
                </div>

                <div
                    className={classNames(
                        "drop-down-menu",
                        {"show": showDropDown}
                    )}
                >
                    {options?.map(o => (
                            <div
                                key={o}
                                className={"drop-down-items"}
                                onClick={() => {
                                    setSelectValue(o)
                                    handleChange(o)
                                }}
                            >
                                {o}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}


