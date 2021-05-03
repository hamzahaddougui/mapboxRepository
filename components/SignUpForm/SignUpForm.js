// Third party
import GoogleLogin from "react-google-login";
import { makeStyles } from "@material-ui/core/styles";
import { Container, CssBaseline, TextField, Link, Grid, Typography } from "@material-ui/core";
import axios from "axios";

// Actions
// import {
//   responseSuccessGoogle,
//   responseFailureGoogle,
// } from "../../services/actions/signup.actions";

// Assets
import muiStyles from "./SignUpFormStyles";

const instance = axios.create({
  withCredentials: true,
});
const useStyles = makeStyles(muiStyles);

const clientId = "79328369707-8da82odrau1iut7pol5linujatbgm9tm.apps.googleusercontent.com";

const SignUpForm = ({ data, handleChange }) => {
  const classes = useStyles();

  const responseSuccessGoogle = async response => {
    console.log("response google");
    console.log(response);
    const res = await instance.post("http://localhost:3001/api/users/signup-google", {
      tokenId: response.tokenId,
    });
    console.log(res);
  };

  const responseFailureGoogle = response => {
    console.log("response Failure google");
  };

  return (
    <Grid container justify="center" alignItems="center" className={classes.root}>
      <CssBaseline />
      <Grid item container direction="column" justify="center" alignItems="center" className={classes.paper}>
        <Typography className={classes.title} component="h1" variant="h5">
          Create an account
        </Typography>
        <Grid item container justify="center" alignItems="center" className={classes.form} noValidate>
          <Grid item container direction="column">
            <Grid item xs={12} className={classes.formElement}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="firstName"
                inputProps={{ className: classes.input }}
                className={classes.MuiInput}
                name="firstName"
                value={data.firstName}
                onChange={handleChange}
                autoComplete="fname"
                placeholder="First name"
              />
            </Grid>
            <Grid item xs={12} className={classes.formElement}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                inputProps={{ className: classes.input }}
                className={classes.MuiInput}
                placeholder="Last name"
                name="lastName"
                value={data.lastName}
                onChange={handleChange}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12} className={classes.formElement}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                inputProps={{ className: classes.input }}
                className={classes.MuiInput}
                placeholder="Email"
                name="email"
                value={data.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12} className={classes.formElement}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                inputProps={{ className: classes.input }}
                className={classes.MuiInput}
                placeholder="Password"
                name="password"
                type="password"
                value={data.password}
                onChange={handleChange}
                autoComplete="password"
              />
            </Grid>
          </Grid>
          <Grid container justify="center" alignItems="center" className={classes.helperWrapper}>
            <Grid item className={classes.helperContainer}>
              <Link className={classes.helper} href="#" variant="body2">
                Why create an account ?
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Typography className={classes.titleOther} variant="body2">
          Or continue with
        </Typography>
        <Grid container direction="row" justify="center" alignItems="center" className={classes.authWrapper}>
          <Grid item xs={9} sm={6} className={classes.authElement}>
            <GoogleLogin
              className={classes.auth}
              clientId={clientId}
              buttonText="Google"
              onSuccess={responseSuccessGoogle}
              onFailure={responseFailureGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </Grid>
          <Grid item xs={9} sm={6} className={classes.authElement}>
            <GoogleLogin
              className={classes.auth}
              clientId={clientId}
              buttonText="Google"
              onSuccess={responseSuccessGoogle}
              onFailure={responseFailureGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignUpForm;
