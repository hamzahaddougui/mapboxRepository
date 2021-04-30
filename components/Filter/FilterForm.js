// Third party
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { makeStyles, Grid } from "@material-ui/core";

// Components
import CheckyButtonContainer from "../../common/CheckyButton/CheckyButtonContainer";
import FilterFormHeader from "./FilterHeader";
import FilterTitle from './FilterTitle';

// Actions
import { loadFilters, checkValueAction } from "../../services/actions/filter.actions";

// Assets
import muiStyles from "./FilterFormStyles";

const useStyles = makeStyles(muiStyles);

const FilterForm = () => {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);
  // const [selected, setSelected] = useState(null);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadFilters());
  // }, []);

  const filters = useSelector(state => state.modules.filter.filters);

  const checkedValues = useSelector(state => state.modules.filter.checkedValues);

  var groupedFilters = _.chain(filters)
    .groupBy("category")
    .toPairs()
    .map(function (currentFilter) {
      return _.toPlainObject(_.zip(["category", "champs"], currentFilter));
    })
    .value();

  // const groups = [];
  // filters.map(filter => {
  //   if (groups.indexOf(filter.group) === -1) {
  //     groups.push(filter.group);
  //   }
  // });

  const handleClick = (e, option) => {
    e.preventDefault;
    dispatch(checkValueAction(option));
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center" className={classes.root} id="filterForm">
  
    {/* <div className={classes.root}> */}
      {/* <div>
      <FilterTitle />
      <FilterFormHeader groups={groups} selected={selected} setSelected={setSelected} />
      </div> */}

      {groupedFilters.map((option, i) => (
        <section key={`${option.category}${i}`} id={option[1][1][0].group} style={{scrollBehavior: "smooth"}}>
          {/* {console.log(option[1][1][0].group)} */}
          <Grid
            key={`${option.category}${i}`}
            item
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
    {/* </div> */}
    </Grid>
  );
};

export default FilterForm;
