import React, {useEffect, useState} from 'react';
import "./step.css"

import { FormData } from "../api"
import Input from "../components/input/Input"
import Button from "../components/button/button"
import Selector from "../components/selector/selector"
import Toggle from "../components/toggle/toggle"
import Return from "../components/return/return"



type Step2Props = {
    next:(data:Partial<FormData>)=>any,
    display: string,
    isDataSaved: boolean,
    goBack:()=> any
}

const Step2 = ({next, display, isDataSaved, goBack} : Step2Props) => {

    const initStep2Data = {
        relationshipStatus: "",
        afterTaxIncome: undefined,
        payFrequency: "",
        occupation: "",
        employer: "",
        currentEmploymentYear: "",
        currentEmploymentMonth: "",
        haveDepandants:"",
        haveOtherIncome: false
    } 

    const [step2Data, setStep2Data] = useState<Partial<FormData>>(initStep2Data)
    const [missfields, setMissfields] = useState<string[]>([])
    const [buttonDisable, setButtonDiable] = useState<boolean>(false)

    const validation = () => {
        let errors = [];
        if(!step2Data.relationshipStatus){
            errors.push("relationshipStatus")
        }
        if(!step2Data.afterTaxIncome || !Number(step2Data.afterTaxIncome)){
            errors.push("afterTaxIncome")
        }
        if(!step2Data.payFrequency){
            errors.push("payFrequency")
        }
        if(!step2Data.occupation){
            errors.push("occupation")
        }
        if(!step2Data.employer){
            errors.push("employer")
        }
        if(!step2Data.currentEmploymentYear){
            errors.push("currentEmploymentYear")
        }
        if(!step2Data.currentEmploymentMonth){
            errors.push("currentEmploymentMonth")
        }
        if(!step2Data.haveDepandants){
            errors.push("haveDepandants")
        }

        setMissfields(errors)
        return errors
    }

    const submit = () => {
        if(!validation().length){
            next(step2Data)
            setButtonDiable(true)
        }
    }

    // clear red border when focus on input
    const clearError = (error:string) => {
        let newErrors = missfields.filter((e) => {
            return e !== error;
        });
        setMissfields(newErrors);
    }

    const changeNumber = (a: string) => {
        if(!Number(a)){
            setStep2Data({...step2Data, afterTaxIncome: undefined})
            const errors = missfields.slice()
            errors.push('afterTaxIncome')
            setMissfields(errors)
        } else {
            const errors = missfields.slice().filter((m)=>m!=="afterTaxIncome")
            setMissfields(errors)
            setStep2Data({...step2Data, afterTaxIncome: Number(a)})
        }
    }

    return <div className = "container" style={{display: display}}>
        <div className = "header">
            A little about you
        </div>
        <Selector 
            handleChange={(a)=>{setStep2Data({...step2Data, relationshipStatus: a})}}
            value={step2Data.relationshipStatus}
            placeholder="Please select"
            options={["Married", "Single"]}
            optionTitle = {"What's your relationship status"}
            onFocus ={()=>{clearError('relationshipStatus')}}
            warning = {missfields.indexOf('relationshipStatus') > -1 ? "warn-border": ""}
        />
        <div className = "row-container">
            <Input 
                title = {"Your after-tax income"}
                value= {step2Data.afterTaxIncome?.toString()}
                onChange={(e)=>{changeNumber(e.target.value)}}
                placeholder = {""}
                holdText = {"$"}
                className = "row-item"
                onFocus ={()=>{clearError('afterTaxIncome')}}
                warning = {missfields.indexOf('afterTaxIncome') > -1 ? "warn-border": ""}
            />
            <Selector 
                handleChange={(a)=>{setStep2Data({...step2Data, payFrequency: a})}}
                value={step2Data.payFrequency}
                placeholder="Select frequency"
                options={["Monthly", "Weekly", "Daily"]}
                optionTitle = {""}
                className = "row-last-child"
                onFocus ={()=>{clearError('payFrequency')}}
                warning = {missfields.indexOf('payFrequency') > -1 ? "warn-border": ""}
            />
        </div>
       
        <Input 
            title = {"Occupation"}
            value= {step2Data.occupation}
            onChange={(e)=>{setStep2Data({...step2Data, occupation: e.target.value})}}
            placeholder = {"Enter you Occupation"}
            onFocus ={()=>{clearError('occupation')}}
            warning = {missfields.indexOf('occupation') > -1 ? "warn-border": ""}
        />
        <Input 
            title = {"Current Employer"}
            value= {step2Data.employer}
            onChange={(e)=>{setStep2Data({...step2Data, employer: e.target.value})}}
            placeholder = {"Enter your Current company's name"}
            onFocus ={()=>{clearError('employer')}}
            warning = {missfields.indexOf('employer') > -1 ? "warn-border": ""}
        />

        <div className = "row-container">
            <Selector 
                handleChange={(a)=>{setStep2Data({...step2Data, currentEmploymentYear: a})}}
                value={step2Data.currentEmploymentYear}
                placeholder="Number of years"
                options={["1 year", "2 years", "more than 2 years"]}
                optionTitle = {"Time in current employment"}
                className = "row-item"
                onFocus ={()=>{clearError('currentEmploymentYear')}}
                warning = {missfields.indexOf('currentEmploymentYear') > -1 ? "warn-border": ""}
            />
            <Selector 
                handleChange={(a)=>{setStep2Data({...step2Data, currentEmploymentMonth: a})}}
                value={step2Data.currentEmploymentMonth}
                placeholder="Number of months"
                options={["1", "2", "3","4","5", "6", "7", "8", "9", "10", "11"]}
                optionTitle = {""}
                className = "row-last-child"
                onFocus ={()=>{clearError('currentEmploymentMonth')}}
                warning = {missfields.indexOf('currentEmploymentMonth') > -1 ? "warn-border": ""}
            />
        </div>

        <Selector 
            handleChange={(a)=>{setStep2Data({...step2Data, haveDepandants: a})}}
            value={step2Data.haveDepandants}
            placeholder="Please select"
            options={["Yes", "None"]}
            optionTitle = {"Have any depandants"}
            onFocus ={()=>{clearError('haveDepandants')}}
            warning = {missfields.indexOf('haveDepandants') > -1 ? "warn-border": ""}
        />
        <Toggle 
            value={step2Data.haveOtherIncome}
            onChange={(e)=>{
                setStep2Data({...step2Data, haveOtherIncome:e.target.checked })
            }}
            className={"toggle"}
            text = {"Do you have other sources of income?"}
        />
        <div className = "button-container">
            <Return 
                onClick = {goBack}
                text = {"Go back"}
            />
            <Button 
                onClick = {submit}
                text = {isDataSaved ? "Success": "Next"} 
                disable = {isDataSaved}
            />
        </div>
      
    </div>;
};

export default Step2;
