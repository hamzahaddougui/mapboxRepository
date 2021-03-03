import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CheckyButtonContainer from "../../../common/CheckyButton/CheckyButtonContainer";
import styles from "./FilterForm.module.css";

import { loadFilters } from "./FilterService";

import { Grid, Typography } from '@material-ui/core'

const FilterForm = () => {
  const [checked, setChecked] = useState(false);
//   const filters = useSelector(state => state.modules.matcher.filters);
//   console.log(filters);

   const dispatch = useDispatch();

//   useEffect(() => {
//     // dispatch({ type: "matcher/loadFilters" });
//     dispatch(loadFilters());
//   }, []);

    useEffect(() => {
        dispatch(loadFilters());
    }, [])

    const filters = useSelector(state => state.modules.matcher.filters);

    console.log(filters);

  const options = [
    {
      title: "tiiiitle",
      value: "Valueee1",
      label: "labeeel",
    },
    {
      title: "tiiiitle",
      value: "Valueee",
      label: "labeeel",
    },
    {
      title: "tiiiitle",
      value: "Valueee2",
      label: "labeeel",
    },
  ];

  const handleClick = () => {
    console.log("CLICK");
  };

  return (
    <div>

      {/* <div
        className={checked ? styles.checkyButtonActive : styles.checkyButton}
        onClick={() => {
          setChecked(!checked);
        }}
      >
        Test
      </div> */}

      {/* <div>
        <CheckyButtonContainer
          checkedValues={["Valueee2"]}
          onClick={handleClick}
          options={options}
          title="Settlement"
        />
      </div> */}

      {filters.map((option, i) => (
        <Grid
          key={`${option.name}${i}`}
          container
          direction="column"
          alignItems="center"
          style={{ marginBottom: "1em" }}
        >
          <Typography>{option.category}</Typography>
          <CheckyButtonContainer
            options={filters}
            //checkedValues={checkedValues}
            onClick={handleClick}
          />
        </Grid>
      ))}

    </div>
  );
};

export default FilterForm;
