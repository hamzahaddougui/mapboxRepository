import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CheckyButtonContainer from "../../../common/CheckyButton/CheckyButtonContainer";
import styles from "./FilterForm.module.css";

import { loadFilters } from "./MatcherService";

const FilterForm = () => {
  const [checked, setChecked] = useState(false);
  const filters = useSelector(state => state.modules.matcher.filters);
  console.log(filters);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch({ type: "matcher/loadFilters" });
    dispatch(loadFilters());
    loadFilters(dispatch);
  }, []);

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
      <div
        className={checked ? styles.checkyButtonActive : styles.checkyButton}
        onClick={() => {
          setChecked(!checked);
        }}
      >
        Test
      </div>
      <div>
        <CheckyButtonContainer
          checkedValues={["Valueee2"]}
          onClick={handleClick}
          options={options}
          title="title Test"
        />
      </div>
    </div>
  );
};

export default FilterForm;
