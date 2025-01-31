import React, { useEffect, useState } from 'react';
import * as EmailValidator from 'email-validator';
import "./step.css"

import Input from "../components/input/Input"
import Button from "../components/button/button"
import { FormData } from "../api"

type Step1Props = {
    next:(data: Partial<FormData> )=> void,
    data: Partial<FormData>
}

const Step1 = ({next, data} : Step1Props) => {

    const initStep1Data = {
        firstName: "",
        middleName: "",
        lastName: "",
        mobile: "",
        email: ""
    }

    const [step1Data, setStep1Data] = useState<Partial<FormData>>(initStep1Data)
    const [missFields, setMissFields] = useState<string[]>([])

    useEffect(()=>{
        setStep1Data(data)
    },[data])
    
    const validation = () => {
        let errors = [];
        if(!step1Data.firstName){
            errors.push("firstName")
        }
        if(!step1Data.lastName){
            errors.push("lastName")
        }
        if(!step1Data.mobile || (step1Data.mobile && step1Data.mobile?.length < 9)){
            errors.push("mobile")
        }
        if(!step1Data.email || !EmailValidator.validate(step1Data.email || "")){
            errors.push("email")
        }
        setMissFields(errors)
        return errors
    }

    const submit = () => {
        if(!validation().length){
            next(step1Data)
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
            setStep1Data({...step1Data, mobile: a})
            const errors = missFields.slice()
            errors.push('mobile')
            setMissFields(errors)
        } else {
            const errors = missFields.slice().filter((m)=>m!=="mobile")
            setMissFields(errors)
            setStep1Data({...step1Data, mobile: a})
        }
    }

    return <div className = "container">
        <div className = "header">
            Tell us about yourself
        </div>
        <Input 
            title = {"First Name"}
            value= {step1Data.firstName}
            onFocus ={()=>{clearError('firstName')}}
            onChange={(e)=>{setStep1Data({...step1Data, firstName: e.target.value})}}
            placeholder = {"As it appears on your license"}
            warning = {missFields.indexOf('firstName') > -1 ? "warn-border": ""}
        />
        <Input 
            title = {"Middle Name"}
            value= {step1Data.middleName}
            onFocus ={()=>{}}
            onChange={(e)=>{setStep1Data({...step1Data, middleName: e.target.value})}}
            placeholder = {"Optional"}
        />
        <Input 
            title = {"Last Name"}
            value= {step1Data.lastName}
            onFocus ={()=>{clearError('lastName')}}
            onChange={(e)=>{setStep1Data({...step1Data, lastName: e.target.value})}}
            placeholder = {"As it appears on your license"}
            warning = {missFields.indexOf('lastName') > -1 ? "warn-border": ""}
        />
        <Input 
            title = {"Mobile number"}
            value= {step1Data.mobile}
            onFocus ={()=>{clearError('mobile')}}
            onChange={(e)=>{changeNumber(e.target.value)}}
            placeholder = {""}
            holdText = {"+61"}
            warning = {missFields.indexOf('mobile') > -1 ? "warn-border": ""}
        />
        <Input 
            title = {"Email"}
            value= {step1Data.email}
            onFocus ={()=>{clearError('email')}}
            onChange={(e)=>{setStep1Data({...step1Data, email: e.target.value})}}
            placeholder = {"Please enter a valid email"}
            warning = {missFields.indexOf('email') > -1 ? "warn-border": ""}
        />
        <Button 
            onClick = {submit}
            text = {"Next"} 
        />
    </div>;
};

export default Step1;
