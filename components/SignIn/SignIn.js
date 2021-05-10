// Third Party
import React from 'react';
import { makeStyles, Grid, Typography, Divider, TextField, Button } from '@material-ui/core';

import GoogleLogin from "react-google-login";
import axios from "axios";

// Assets
import muiStyles from './SignInStyles';

const useStyles = makeStyles(muiStyles);

const instance = axios.create({
    withCredentials: true,
});

const clientId = "79328369707-8da82odrau1iut7pol5linujatbgm9tm.apps.googleusercontent.com";

const SignIn = ({ handleCloseSignIn, data, handleSignInChange, handleSignInSubmit }) => {
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
        <Grid container alignItems="center" justify="center" className={classes.signInRoot}>
            <Grid item container direction="row" alignItems="center" justify="center" className={classes.titleContainer} >
                <Typography className={classes.signInTitle}>SIGN IN</Typography>
                <img src="/cancel.svg" alt="Close Button" className={classes.closeIcon} onClick={handleCloseSignIn} />
            </Grid>
            {/* <Grid item> */}
                <Divider variant="middle" className={classes.signInDivider} />
            {/* </Grid> */}
            <Grid item container direction="column" alignItems="center" className={classes.formContainer}>
                <Typography className={classes.formTitle}>Welcome back</Typography>
                <Grid item className={classes.inputElement}>
                    <TextField
                        variant="outlined"
                        type="email"
                        required
                        fullWidth
                        id="email"
                        inputProps={{ className: classes.input }}
                        className={classes.MuiInput}
                        placeholder="Email"
                        name="email"
                        value={data.email}
                        onChange={handleSignInChange}
                        autoComplete="email"
                    />
                </Grid>
                <Grid item className={classes.inputElement}>
                    <TextField
                        variant="outlined"
                        type="password"
                        required
                        fullWidth
                        id="password"
                        inputProps={{ className: classes.input }}
                        className={classes.MuiInput}
                        placeholder="Password"
                        name="password"
                        value={data.password}
                        onChange={handleSignInChange}
                    />
                </Grid>
                <Grid item className={classes.inputElement}>
                    <Button
                        variant="outlined"
                        fullWidth
                        className={classes.submitButton}
                        onClick={handleSignInSubmit}
                    >
                        Sign in
                    </Button>
                </Grid>
            </Grid>

            <Grid item container direction="column" alignItems="center" className={classes.smContainer}>
                <Typography className={classes.smTxt}>Or continue with</Typography>
                <Grid item container direction="row" justify="center" alignItems="center" className={classes.smButtonsWrapper}>
                    <Grid item xs={12} sm={6} className={classes.smElement}>
                        <GoogleLogin
                            className={classes.smElementAuth}
                            clientId={clientId}
                            buttonText="Google"
                            onSuccess={responseSuccessGoogle}
                            onFailure={responseFailureGoogle}
                            cookiePolicy={"single_host_origin"}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.smElement}>
                        <GoogleLogin
                            className={classes.smElementAuth}
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
    )
}

export default SignIn
