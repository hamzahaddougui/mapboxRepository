import React, {useState} from "react";
import { useSelector } from "react-redux";
import Router, { useRouter } from "next/router";
import { makeStyles, Grid } from "@material-ui/core";

import FilterForm from "components/Filter/FilterForm";
import FilterTitle from "components/Filter/FilterTitle";
import FilterFormHeader from "components/Filter/FilterHeader";
import FilterFooter from "components/FilterFooter/FilterFooter";
import BackButton from "../../../common/BackButton/BackButton";
import muiStyles from "styles/startStyles";

const useStyles = makeStyles(muiStyles);

const Start = () => {
  const classes = useStyles();
  const router = useRouter();

  const [selected, setSelected] = useState(null);

  const filters = useSelector(state => state.modules.filter.filters);

  const groups = [];
  filters.map(filter => {
    if (groups.indexOf(filter.group) === -1) {
      groups.push(filter.group);
    }
  });

  const handleBack = () => {
    router.push("/matcher");
  };
  const handleNext = () => {
    router.push("/matcher/priority");
  };

  // <div className={classes.root} open={true}>
  //     {/* <div className={classes.jumbo}>
  //       <BackButton onClick={handleBack} />
  //       <div className={classes.header}>
  //         <h2 className={classes.title}>Narrow down your Match</h2>
  //         <div className={classes.subtitle}>
  //           <div>
  //             Choose as many filters as you like.
  //             <br />
  //             You can always change them later
  //           </div>
  //         </div>
  //       </div>
  //     </div> */}
  //     <div style={{height: "calc(100vh - 67px)"}}>
  //     <div>
  //     <FilterTitle />
  //     <FilterFormHeader groups={groups} selected={selected} setSelected={setSelected} />
  //     </div>

  //     <div className={classes.form}>
  //       <FilterForm />
  //     </div>
  //     </div>
  //     <FilterFooter onClick={handleNext} />
  //   </div>

  return (
    <Grid container direction="column" justify="space-between" className={classes.root} open={true}>
      <Grid item container direction="column" style={{height: "30%"}}>
        <Grid item style={{height: "50%"}}><FilterTitle /></Grid>
        <Grid item style={{height: "50%"}}><FilterFormHeader groups={groups} selected={selected} setSelected={setSelected} /></Grid>
      </Grid>
      <Grid item container direction="column" style={{height: "68%", position: "relative", overflowY: "scroll"}} className={classes.form}>
        <FilterForm />
      </Grid>
      <Grid item container direction="column" style={{height: "65px"}}>
        <FilterFooter onClick={handleNext} />
      </Grid>

    </Grid>
  );
};

export default Start;
