import { useState } from "react";
import { useRouter } from "next/router";
import GoogleLogin from "react-google-login";
import { Grid } from "@material-ui/core";

const clientId = "79328369707-8da82odrau1iut7pol5linujatbgm9tm.apps.googleusercontent.com";
const clientSecret = "7VJgSWpzgy5tmq1QUrGy6XdZ";

import axios from "axios";

const instance = axios.create({
  withCredentials: true,
});

const Login = () => {
  const router = useRouter();
  const [data, setData] = useState({ email: "", password: "" });

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

  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };

  const handleClick = async () => {
    if (data.email && data.password) {
      try {
        console.log(data);
        const response = await instance.post("http://localhost:3001/api/users/signup", data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  console.log(data);

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item container direction="column" style={{ width: 150 }}>
        <h1 style={{ textAlign: "center" }}>Signup</h1>

        <input value={data.email} onChange={handleChange} name="email" />
        <input value={data.password} onChange={handleChange} name="password" type="password" />
        <button onClick={handleClick}>Click</button>
      </Grid>
      <Grid item container direction="column" alignItems="center">
        <Grid item>
          <GoogleLogin
            clientId={clientId}
            buttonText="Google"
            onSuccess={responseSuccessGoogle}
            onFailure={responseFailureGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </Grid>
        <u onClick={() => router.push("/signin")}>signin</u>
      </Grid>
    </Grid>
  );
};

export default Login;
