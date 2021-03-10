import { useState } from "react";
import GoogleLogin from "react-google-login";

const clientId = "79328369707-8da82odrau1iut7pol5linujatbgm9tm.apps.googleusercontent.com";
const clientSecret = "7VJgSWpzgy5tmq1QUrGy6XdZ";

import axios from "axios";

const instance = axios.create({
  withCredentials: true,
});

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const responseSuccessGoogle = async response => {
    console.log("response google");
    console.log(response);
    const res = await instance.post("http://localhost:3001/api/users/signin/google", {
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
        const response = await instance.post("http://localhost:3001/api/users/signin/local", {
          data,
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  console.log(data);

  return (
    <div>
      <h1>Login With Google</h1>

      <input value={data.email} onChange={handleChange} name="email" />
      <input value={data.password} onChange={handleChange} name="password" type="password" />
      <button onClick={handleClick}>Click</button>

      <GoogleLogin
        clientId={clientId}
        buttonText="Login With Google"
        onSuccess={responseSuccessGoogle}
        onFailure={responseFailureGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Login;
