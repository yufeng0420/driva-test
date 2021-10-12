import React, {useEffect, lazy, Suspense, useState, useRef} from 'react'
import { BrowserRouter as Router, Redirect, Route, useLocation, Switch, useHistory,withRouter } from "react-router-dom";
import { FormData, initFormData, postForm } from './api';
import Step1 from './page/Step1';
import Step2 from "./page/step2"

const Routes = ()=> {

    const history = useHistory();
    const [formData, setFormData] = useState<Partial<FormData>>(initFormData);
    const [isSaved, setIsSaved] = useState(false);

    const submit = async (data: Partial<FormData>) => {
        setFormData({ ...formData, ...data });
        console.log({ ...formData, ...data })
    
        try {
            const responds = await postForm({ ...formData, ...data });
            if (responds.dataSaved) {
                setIsSaved(true);
            }
        } catch (e) {
            console.log(e);
        }
    };


    const next = (data: Partial<FormData>) => {
        setFormData({ ...data });
        history.push("/step2")
      };

    const step1render = () => {
        return <Step1 
            next={next} 
        />
    }

    const step2render = () => {
        return <Step2 
            next={submit}
            isDataSaved={isSaved}
            goBack={() => {
                history.push('/step1')
            }}
        />
    }


    return <Switch>
                <Route
                    exact
                    path={"/step1"}
                    render={step1render}
                />

                <Route
                    exact
                    path={"/step2"}
                    render = {step2render}
                />
                <Redirect to={"/step1"}/>
        </Switch>


}


export default Routes
