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
    isDataSaved: boolean,
    goBack:()=> any,
    data: Partial<FormData>
}

const Step2 = ({next, isDataSaved, goBack, data} : Step2Props) => {

    const initStep2Data = {
        relationshipStatus: "",
        afterTaxIncome: undefined,
        payFrequency: "",
        occupation: "",
        employer: "",
        currentEmploymentYear: undefined,
        currentEmploymentMonth: undefined,
        haveDependents:undefined,
        haveOtherIncome: false
    } 

    const [step2Data, setStep2Data] = useState<Partial<FormData>>(initStep2Data)
    const [missFields, setMissFields] = useState<string[]>([])
    const [buttonDisable, setButtonDisable] = useState<boolean>(false)

    useEffect(()=>{
        setStep2Data(data)
    },[data])

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
        if(!step2Data.haveDependents){
            errors.push("haveDependents")
        }

        setMissFields(errors)
        return errors
    }

    const submit = () => {
        if(!validation().length){
            next(step2Data)
            setButtonDisable(true)
        }
    }

    // clear red border when focus on input
    const clearError = (error:string) => {
        let newErrors = missFields.filter((e) => {
            return e !== error;
        });
        setMissFields(newErrors);
    }

    const changeNumber = (a: string) => {
        if(!Number(a)){
            setStep2Data({...step2Data, afterTaxIncome: undefined})
            const errors = missFields.slice()
            errors.push('afterTaxIncome')
            setMissFields(errors)
        } else {
            const errors = missFields.slice().filter((m)=>m!=="afterTaxIncome")
            setMissFields(errors)
            setStep2Data({...step2Data, afterTaxIncome: Number(a)})
        }
    }

    return <div className = "container">
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
            warning = {missFields.indexOf('relationshipStatus') > -1 ? "warn-border": ""}
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
                warning = {missFields.indexOf('afterTaxIncome') > -1 ? "warn-border": ""}
            />
            <Selector 
                handleChange={(a)=>{setStep2Data({...step2Data, payFrequency: a})}}
                value={step2Data.payFrequency}
                placeholder="Select frequency"
                options={["Monthly", "Weekly", "Daily"]}
                optionTitle = {""}
                className = "row-last-child"
                onFocus ={()=>{clearError('payFrequency')}}
                warning = {missFields.indexOf('payFrequency') > -1 ? "warn-border": ""}
            />
        </div>
       
        <Input 
            title = {"Occupation"}
            value= {step2Data.occupation}
            onChange={(e)=>{setStep2Data({...step2Data, occupation: e.target.value})}}
            placeholder = {"Enter you Occupation"}
            onFocus ={()=>{clearError('occupation')}}
            warning = {missFields.indexOf('occupation') > -1 ? "warn-border": ""}
        />
        <Input 
            title = {"Current Employer"}
            value= {step2Data.employer}
            onChange={(e)=>{setStep2Data({...step2Data, employer: e.target.value})}}
            placeholder = {"Enter your Current company's name"}
            onFocus ={()=>{clearError('employer')}}
            warning = {missFields.indexOf('employer') > -1 ? "warn-border": ""}
        />

        <div className = "row-container">
            <Selector 
                handleChange={(a)=>{setStep2Data({...step2Data, currentEmploymentYear: parseInt(a)})}}
                value={step2Data.currentEmploymentYear?.toString()}
                valueText = {step2Data.currentEmploymentYear === 1 ? "year" : "years"}
                placeholder="Number of years"
                options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]}
                optionTitle = {"Time in current employment"}
                className = "row-item"
                onFocus ={()=>{clearError('currentEmploymentYear')}}
                warning = {missFields.indexOf('currentEmploymentYear') > -1 ? "warn-border": ""}
            />
            <Selector 
                handleChange={(a)=>{setStep2Data({...step2Data, currentEmploymentMonth: parseInt(a)})}}
                value={step2Data.currentEmploymentMonth?.toString()}
                valueText = {step2Data.currentEmploymentMonth === 1 ? "month": "months"}
                placeholder="Number of months"
                options={["1", "2", "3","4","5", "6", "7", "8", "9", "10", "11"]}
                optionTitle = {""}
                className = "row-last-child"
                onFocus ={()=>{clearError('currentEmploymentMonth')}}
                warning = {missFields.indexOf('currentEmploymentMonth') > -1 ? "warn-border": ""}
            />
        </div>

        <Selector 
            handleChange={(a)=>{setStep2Data({...step2Data, haveDependents: parseInt(a)})}}
            value={step2Data.haveDependents}
            placeholder="Please select"
            options={["1", "2", "3","4","5", "6", "7", "8", "9", "10"]}
            optionTitle = {"Have any dependents"}
            onFocus ={()=>{clearError('haveDependents')}}
            warning = {missFields.indexOf('haveDependents') > -1 ? "warn-border": ""}
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
                text = {isDataSaved ? "Success": (buttonDisable ? "Waiting...": "Next")}
                disable = {isDataSaved}
            />
        </div>
      
    </div>;
};

export default Step2;
