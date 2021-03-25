import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CheckyButtonContainer from "../../common/CheckyButton/CheckyButtonContainer";
import styles from "./FilterForm.module.css";

import _ from "lodash";

import { loadFilters, checkValueAction } from "./FilterService";

import FilterFormHeader from "./FilterFormHeader";

import { Grid, Typography } from "@material-ui/core";

const FilterForm = () => {
  const [checked, setChecked] = useState(false);
  const [selected, setSelected] = useState(null);

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

  const groups = [];
  filters.map(filter => {
    if (groups.indexOf(filter.group) === -1) {
      groups.push(filter.group);
    }
  });

  const handleClick = (e, option) => {
    e.preventDefault;
    dispatch(checkValueAction(option));
  };

  return (
    <div className={styles.root}>
      <FilterFormHeader groups={groups} selected={selected} setSelected={setSelected} />

      {groupedFilters.map((option, i) => (
        <section key={`${option.category}${i}`} id={option[1][1][0].group}>
          {/* {console.log(option[1][1][0].group)} */}
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
        </section>
      ))}
    </div>
  );
};

export default FilterForm;
