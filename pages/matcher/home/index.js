// Third party
import { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";

// components
import HomeLayout from 'components/HomeLayout/HomeLayout.js';
import HMForm from 'components/HomeMatcher/HMForm/HMForm';
import ChoiceView from 'components/HomeMatcher/ChoiceView/ChoiceView';
import Congratulation from 'components/HomeMatcher/Congratulation/Congratulation'

// Actions


// Assets
import muiStyles from "styles/homeStyles";

const useStyles = makeStyles(muiStyles);

const Home = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1);

  const steps =[
    {
        key: 1,
        content: (<HMForm open={open} setOpen={setOpen} totalSteps={2} currentStep={currentStep} setCurrentStep={setCurrentStep} />)
    },
    {
        key: 2,
        content: (<ChoiceView open={open} setOpen={setOpen} totalSteps={2} currentStep={currentStep} setCurrentStep={setCurrentStep} />) 
    }
  ]

  return (
    <HomeLayout>
        {
          open
            ?
          (
            steps[currentStep - 1].content
          )
            :
          (
            <Congratulation open={open} setOpen={setOpen} />
          )
        }
    </HomeLayout>
  );
};

export default Home;
