// Third party
import { makeStyles, Grid, Typography, Container } from "@material-ui/core";

//Assets
import muiStyles from "./FilterHeaderStyles";

const useStyles = makeStyles(muiStyles);

const FilterFormHeader = ({ groups, selected, setSelected }) => {
  const classes = useStyles();

  console.log("groups: ", groups);

  return (
    <Container className={classes.root}>
      <Grid container direction="row" justify="center" spacing={2}>
        {groups.map((group, i) => (
          <Grid
            key={i}
            component="a"
            item
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.elementContainer}
            // href={`#${selected}`} 
            onClick={() => {
              console.log(group), setSelected(group),document.getElementById(`${group}`).scrollIntoView({
                behavior: 'smooth'
              });
            }}
          >
            {selected === group ? (
              <Grid item className={classes.selectedIconContainer}>
                {/* <img src="/whiteGlobe.svg" className={classes.selectedIcon} /> */}
                <img src={`/${group.toLowerCase().replace(/ /g,"_")}OnIcon.svg`} className={classes.selectedIcon} />
              </Grid>
            ) : (
              <Grid item className={classes.iconContainer}>
                {/* <img src="/globe.svg" className={classes.icon}/> */}
                <img src={`/${group.toLowerCase().replace(/ /g,"_")}Icon.svg`} className={classes.icon} />
              </Grid>
            )}
            <Grid item className={classes.textContainer}>
              <Typography
                className={selected === group ? classes.selectedTitleTxt : classes.titleTxt}
              >
                {group.toLowerCase()}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FilterFormHeader;
