// Third party
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, TextField } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { Autocomplete, createFilterOptions } from "@material-ui/lab";

//Actions
import { addFavorite } from "../Neighborhood/NbService";

// Assets
import muiStyles from "./AddNbStyles";

const useStyles = makeStyles(muiStyles);

const filter = createFilterOptions();

const AddNeighborhood = ({ open, setOpen }) => {
  const classes = useStyles((open = { open }));

  const dispatch = useDispatch();

  const neighborhoods = useSelector(state => state.modules.neighborhood.matched);

  const [value, setValue] = useState(null);

  return (
    <div className={classes.root} open={open}>
      <Close
        className={classes.close}
        onClick={() => {
          setOpen(!open);
        }}
      />

      <div className={classes.addNeighborhoodWrapper}>
        <img
          className={classes.addNeighborhoodImg}
          src="/addNeighborhood.svg"
          alt="Add Neighborhood"
        />

        <Typography className={classes.addNeighborhoodTxt} variant="h2">
          Add a neighborhood to your favorites
        </Typography>

        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            if (typeof newValue === "string") {
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
            if (params.inputValue !== "") {
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
          getOptionLabel={option => {
            // Value selected with enter, right from the input
            if (typeof option === "string") {
              return option;
            }
            // Add "xxx" option created dynamically
            if (option.inputValue) {
              return option.inputValue;
            }
            // Regular option
            return option.Neighborhood;
          }}
          renderOption={option => option.Neighborhood}
          style={{ width: 600, height: 54 }}
          freeSolo
          renderInput={params => (
            <TextField
              {...params}
              label="Type the name of a neighborhood"
              className={classes.addNeighborhoodInput}
              variant="outlined"
            />
          )}
        />
      </div>

      <div className={classes.bottomBox}>
        <Button
          className={classes.navigation}
          onClick={() => {
            value
              ? (dispatch(addFavorite(value)), setOpen(!open), setValue(null))
              : console.log("Value not found");
          }}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default AddNeighborhood;
