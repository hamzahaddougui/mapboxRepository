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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography className={classes.title} component="h1" variant="h5">
          Create an account
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="firstName"
                inputProps={{ className: classes.input }}
                name="firstName"
                value={data.firstName}
                onChange={handleChange}
                autoComplete="fname"
                placeholder="First name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                inputProps={{ className: classes.input }}
                placeholder="Last name"
                name="lastName"
                value={data.lastName}
                onChange={handleChange}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                inputProps={{ className: classes.input }}
                placeholder="Email"
                name="email"
                value={data.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                inputProps={{ className: classes.input }}
                placeholder="Password"
                name="password"
                type="password"
                value={data.password}
                onChange={handleChange}
                autoComplete="password"
              />
            </Grid>
          </Grid>
          <Grid container justify="center" className={classes.helperWrapper}>
            <Grid item>
              <Link className={classes.helper} href="#" variant="body2">
                Why create an account ?
              </Link>
            </Grid>
          </Grid>
        </form>
        <Typography className={classes.titleOther} variant="body2">
          Or continue with
        </Typography>
        <Grid container spacing={2} className={classes.authWrapper}>
          <Grid item xs={12} sm={6}>
            <GoogleLogin
              className={classes.auth}
              clientId={clientId}
              buttonText="Google"
              onSuccess={responseSuccessGoogle}
              onFailure={responseFailureGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
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
      </div>
    </Container>
  );
};

export default SignUpForm;
