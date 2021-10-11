import React, { useState } from 'react';
import * as EmailValidator from 'email-validator';
import "./step.css"

import Input from "../components/input/Input"
import Button from "../components/button/button"
import { FormData } from "../api"

type Step1Props = {
    next:(data: Partial<FormData> )=> void,
    display: string
}

const Step1 = ({next, display} : Step1Props) => {

    const initStep1Data = {
        firstName: "",
        middleName: "",
        lastName: "",
        mobile: "",
        email: ""
    }

    const [step1Data, setStep1Data] = useState<Partial<FormData>>(initStep1Data)
    const [missfields, setMissfields] = useState<string[]>([])

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
        if(step1Data.email && !EmailValidator.validate(step1Data.email)){
            errors.push("email")
        }
        setMissfields(errors)
        return errors
    }

    const submit = () => {
        if(!validation().length){
            next(step1Data)
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
            setStep1Data({...step1Data, mobile: a})
            const errors = missfields.slice()
            errors.push('mobile')
            setMissfields(errors)
        } else {
            const errors = missfields.slice().filter((m)=>m!=="mobile")
            setMissfields(errors)
            setStep1Data({...step1Data, mobile: a})
        }
    }

    return <div className = "container" style={{display: display}}>
        <div className = "header">
            Tell us about yourself
        </div>
        <Input 
            title = {"First Name"}
            value= {step1Data.firstName}
            onFocus ={()=>{clearError('firstName')}}
            onChange={(e)=>{setStep1Data({...step1Data, firstName: e.target.value})}}
            placeholder = {"As it appears on your license"}
            warning = {missfields.indexOf('firstName') > -1 ? "warn-border": ""}
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
            warning = {missfields.indexOf('lastName') > -1 ? "warn-border": ""}
        />
        <Input 
            title = {"Mobile number"}
            value= {step1Data.mobile}
            onFocus ={()=>{clearError('mobile')}}
            onChange={(e)=>{changeNumber(e.target.value)}}
            placeholder = {""}
            holdText = {"+61"}
            warning = {missfields.indexOf('mobile') > -1 ? "warn-border": ""}
        />
        <Input 
            title = {"Email"}
            value= {step1Data.email}
            onFocus ={()=>{clearError('email')}}
            onChange={(e)=>{setStep1Data({...step1Data, email: e.target.value})}}
            placeholder = {"Please enter a valid email"}
            warning = {missfields.indexOf('email') > -1 ? "warn-border": ""}
        />
        <Button 
            onClick = {submit}
            text = {"Next"} 
        />
    </div>;
};

export default Step1;
