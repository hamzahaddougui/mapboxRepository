import { useState } from 'react';

import { useSelector, useDispatch } from "react-redux";

import { addFavorite } from "../../Matcher/NeighborhoodService";

import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, TextField } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { Autocomplete, createFilterOptions } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#FFF",
        height: '100vh',
        position: 'absolute',
        top: '0px',
        bottom: '0px',
        right: '0px',
        left: '0px',
        zIndex: '1',
        display : props => props.open ? "block" : "none",
    },
    close:{
        width: "27px",
        height: "27px",
        position: "absolute",
        right: "27px",
        top: "33px",
        cursor: "pointer",
    },
    bottomBox: {
        height: "8%",
        width: "100%",
        backgroundColor: "#fff",
        boxShadow: "0 6px 10px 0 rgba(14,31,53,0.12), 0 12px 18px 0 rgba(14,31,53,0.20), 0 20px 40px -1px rgba(14,31,53,0.12)",
        position: "fixed",
        top: "92%",
        right: "0%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      navigation: {
        color: "#323643",
        fontSize: 16.02,
        textTransform: "none",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "transparent",
        },
      },
      addNeighborhoodImg:{
        width: "119px",
        height: "112",
      },
      addNeighborhoodTxt:{
        fontFamily: "Poppins",
        fontSize: 25,
        fontWeight: "bold",
        marginTop: "17px"
      },
      addNeighborhoodWrapper:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "absolute",
        left: "50%",
        top: "25%",
        transform: "translate(-50%, -25%)",
      },
      addNeighborhoodInput: {
        marginTop: "32px",
        '& .MuiOutlinedInput-root':{
            borderRadius: "32px"
          },
      }
}));

const filter = createFilterOptions();

const AddNeighborhood = ({open, setOpen}) => {

    const classes = useStyles(open={open});

    const dispatch = useDispatch();

    const neighborhoods = useSelector(state => state.modules.neighborhood.matched);

    const [value, setValue] = useState(null);

    return (
        <div className={classes.root} open={open}>
            <Close className={classes.close} onClick={() =>{setOpen(!open)}} />

            <div className={classes.addNeighborhoodWrapper}>

            <img
              className={classes.addNeighborhoodImg}
              src="/addNeighborhood.svg"
              alt="Add Neighborhood"
            />

            <Typography className={classes.addNeighborhoodTxt} variant="h2">Add a neighborhood to your favorites</Typography>

            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                    if (typeof newValue === 'string') {
                    setValue({
                        Neighborhood: newValue,
                    });
                    } else if (newValue && newValue.inputValue) {
                    // Create a new value from the user input
                    setValue({
                        Neighborhood: newValue.inputValue,
                    });
                    } else {
                    setValue(newValue);
                    }
                }}
                filterOptions={(options, params) => {
                    const filtered = filter(options, params);

                    // Suggest the creation of a new value
                    if (params.inputValue !== '') {
                    filtered.push({
                        inputValue: params.inputValue,
                        Neighborhood: `"${params.inputValue}" not found`,
                    });
                    }

                    return filtered;
                }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                id="add-neighborhood"
                options={neighborhoods.data ? neighborhoods.data : []}
                getOptionLabel={(option) => {
                    // Value selected with enter, right from the input
                    if (typeof option === 'string') {
                    return option;
                    }
                    // Add "xxx" option created dynamically
                    if (option.inputValue) {
                    return option.inputValue;
                    }
                    // Regular option
                    return option.Neighborhood;
                }}
                renderOption={(option) => option.Neighborhood}
                style={{ width: 600, height: 54 }}
                freeSolo
                renderInput={(params) => (
                    <TextField {...params} label="Type the name of a neighborhood" className={classes.addNeighborhoodInput} variant="outlined" />
                )}
            />

            </div>

            <div className={classes.bottomBox}>
                <Button className={classes.navigation} onClick={() => {value ? (dispatch(addFavorite(value)), setOpen(!open), setValue(null))  : console.log("Value not found");}}>Confirm</Button>
            </div>
        </div>
    )
}

export default AddNeighborhood
