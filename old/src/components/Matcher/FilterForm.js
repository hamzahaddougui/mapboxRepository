import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CheckyButtonContainer from "../../common/CheckyButton/CheckyButtonContainer";
import styles from "./FilterForm.module.css";

import _ from "lodash";

import { loadFilters, checkValueAction } from "./FilterService";

import { Grid, Typography } from "@material-ui/core";

const FilterForm = () => {
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFilters());
  }, []);

  const filters = useSelector(state => state.modules.filter.filters);

  const checkedValues = useSelector(state => state.modules.filter.checkedValues);

  var groupedFilters = _.chain(filters)
    .groupBy("category")
    .toPairs()
    .map(function (currentFilter) {
      return _.toPlainObject(_.zip(["category", "champs"], currentFilter));
    })
    .value();

  // console.log(groupedFilters);
  // console.log(groupedFilters[0][0][1]);
  // console.log(groupedFilters[0][1][1]);

  // const options = [
  //   {
  //     title: "tiiiitle",
  //     value: "Valueee1",
  //     label: "labeeel",
  //   },
  //   {
  //     title: "tiiiitle",
  //     value: "Valueee",
  //     label: "labeeel",
  //   },
  //   {
  //     title: "tiiiitle",
  //     value: "Valueee2",
  //     label: "labeeel",
  //   },
  // ];

  const handleClick = (e, option) => {
    e.preventDefault;
    dispatch(checkValueAction(option));
  };

  return (
    <div className={styles.root}>
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
          options={groupedFilters[0][1][1]}
          title={groupedFilters[0][0][1]}
        />
      </div> */}

      {groupedFilters.map((option, i) => (
        <Grid
          key={`${option.category}${i}`}
          container
          direction="column"
          alignItems="center"
          style={{ marginBottom: "1em" }}
        >
          <CheckyButtonContainer
            title={option[0][1]}
            options={option[1][1]}
            checkedValues={checkedValues}
            onClick={handleClick}
          />
        </Grid>
      ))}
    </div>
  );
};

export default FilterForm;
