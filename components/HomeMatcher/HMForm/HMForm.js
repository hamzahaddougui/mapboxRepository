// Third Party
import React, { useState } from 'react';
import { makeStyles, Grid, Typography, Container } from "@material-ui/core";
import { Close } from '@material-ui/icons';

// Components
import PlusMinusForm from "../../../common/PlusMinusForm/PlusMinusForm";
import SliderForm from "../../../common/SliderForm/SliderForm";
import MultiChoiceForm from "../../../common/MultiChoiceForm/MultiChoiceForm";
import BottomBar from "../../HomeLayout/BottomBar/BottomBar"

// Assets
import muiStyles from './HMFormStyles';

const useStyles = makeStyles(muiStyles);

const propertyTypes = [
    {
        key: 1,
        icon: "/singleHome.svg",
        name: "Single home"
    },
    {
        key: 2,
        icon: "/condo.svg",
        name: "Condo"
    },
    {
        key: 3,
        icon: "/townhouse.svg",
        name: "Townhouse"
    },
    {
        key: 4,
        icon: "/coOp.svg",
        name: "Co-Op"
    },
    {
        key: 5,
        icon: "/land.svg",
        name: "Land"
    },
]

const HMForm = ({ open, setOpen, totalSteps, currentStep, setCurrentStep }) => {
    const classes = useStyles();

    const [bedroomsNumber, setBedroomsNumber] = useState(0);
    const [bathroomsNumber, setBathroomsNumber] = useState(0);
    const [value, setValue] = useState([0, 600]);
    const [selectedProperty, setSelectedProperty] = useState(null);

    const handleClose = () => {
        setOpen(!open);
    }

    const handleSubmitForm = () => {
        const userChoices = {
            "minPrice": value && value[0]*10000,
            "maxPrice": value && value[1]*10000,
            "bedroomsNumber": bedroomsNumber ? bedroomsNumber : null,
            "bathroomsNumber": bathroomsNumber ? bathroomsNumber : null,
            "selectedProperty": selectedProperty ? propertyTypes[selectedProperty-1].name : null
        };
        console.log(userChoices);
    }

    return (
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid item container direction="column" justify="center" alignItems="center" className={classes.contentContainer}>
                {/* <Close className={classes.closeIcon} onClick={handleClose} /> */}
                <img src="/cancel.svg" alt="Close Icon" className={classes.closeIcon} onClick={handleClose} />
                <Typography className={classes.title}>Let's go over the basics</Typography>
                <Typography className={classes.subtitle}>Adjust your preferences</Typography>

                <Grid item className={classes.priceRangeContainer}>
                    <SliderForm
                        icon="/priceRange.svg"
                        alt="Price range Icon"
                        title="Price range"
                        value={value}
                        setValue={setValue}
                        max={600}
                    />
                </Grid>

                <Grid item>
                    <PlusMinusForm 
                        icon="/bedrooms.svg"
                        alt="Bedrooms Icon"
                        title="Bedrooms"
                        number={bedroomsNumber}
                        setNumber={setBedroomsNumber}
                    />
                </Grid>
                <Grid item>
                    <PlusMinusForm 
                        icon="/bathrooms.svg"
                        alt="Bathrooms Icon"
                        title="Bathrooms"
                        number={bathroomsNumber}
                        setNumber={setBathroomsNumber}
                    />
                </Grid>

                <Grid item>
                    <MultiChoiceForm
                        icon="/propertyType.svg"
                        alt="Property type icon"
                        title="Property type"
                        selectedProperty={selectedProperty}
                        setSelectedProperty={setSelectedProperty}
                        propertyTypes={propertyTypes}
                    />
                </Grid>
                </Grid>

                <BottomBar totalSteps={totalSteps} currentStep={currentStep} setCurrentStep={setCurrentStep} onClick={handleSubmitForm} />

            </Grid>
            
    )
}

export default HMForm
