import React, { useState } from 'react';

import './app.css';
import Step1 from './page/Step1';
import Step2 from './page/step2';
import { FormData, initFormData, postForm } from './api';

const App: React.FC = () => {
  const [nextStep, setNextStep] = useState(false);
  const [formData, setFormData] = useState<Partial<FormData>>(initFormData);
  const [isSaved, setIsSaved] = useState(false);

  const next = (data: Partial<FormData>) => {
    setFormData({ ...data });
    setNextStep(true);
  };

  const submit = async (data: Partial<FormData>) => {
    setFormData({ ...formData, ...data });

    try {
      const responds = await postForm({ ...formData, ...data });
      if (responds.dataSaved) {
        setIsSaved(true);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="app">
      <Step1 next={next} display={nextStep ? 'none' : ''} />
      <Step2
        next={submit}
        display={!nextStep ? 'none' : ''}
        isDataSaved={isSaved}
        goBack={() => {
          setNextStep(false);
        }}
      />
    </div>
  );
};

export default App;
