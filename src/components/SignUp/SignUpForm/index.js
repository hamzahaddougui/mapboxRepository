import axios from "axios";
import GoogleLogin from "react-google-login";

import styles from './SignUpForm.module.css';

import { makeStyles } from '@material-ui/core/styles';

import {
    Container,
    CssBaseline,
    TextField,
    Link,
    Grid,
    Typography 
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: "12px",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '600px', // Fix IE 11 issue.
      marginTop: "18px",
      '& .MuiOutlinedInput-root':{
        borderRadius: "27px"
      },
      
    },
    title:{
        fontFamily: "Poppins",
        fontSize: 20.27,
        fontWeight: "bold",
        textTransform: "Uppercase",
    },
    helper:{
        color: "#323643",
        opacity: 0.68,
        fontSize: 14.24,
        textDecoration: "underline"
    },
    helperWrapper:{
        marginTop: "16px"
    },
    titleOther:{
        fontFamily: "Poppins",
        color: "#323643",
        fontSize: 16.02,
        fontWeight: "lighter",
        marginTop: "59px"
    },
    authWrapper:{
        width: "600px",
        marginTop: "16px"
    }
}));

const clientId = "79328369707-8da82odrau1iut7pol5linujatbgm9tm.apps.googleusercontent.com";

const instance = axios.create({
    withCredentials: true,
  });

const SignUpForm = () => {
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
        console.log("response google", response);
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
                    inputProps={{
                        style: {
                            textAlign: "center",
                        },
                    }}
                    //label="First name"
                    name="firstName"
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
                    inputProps={{
                        style: {
                            textAlign: "center",
                        },
                    }}
                    //label="Last name"
                    placeholder="Last name"
                    name="lastName"
                    autoComplete="lname"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    inputProps={{
                        style: {
                            textAlign: "center",
                        },
                    }}
                    //label="Email Address"
                    placeholder="Email"
                    name="email"
                    autoComplete="email"
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
                className= {styles.auth}
                clientId={clientId}
                buttonText="Google"
                onSuccess={responseSuccessGoogle}
                onFailure={responseFailureGoogle}
                cookiePolicy={"single_host_origin"}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <GoogleLogin
                className= {styles.auth}
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
    )
}

export default SignUpForm
