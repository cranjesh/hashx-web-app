import React, { useState } from "react";
import "./styles.css";
import CustomInput from "./CustomInput";
import Button from "./Button";

const LoginForm = ({onButtonClick}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="App">
      <form className="form">
        <CustomInput
          labelText="Email"
          id="email"
          formControlProps={{
            fullWidth: true
          }}
          handleChange={e=> setEmail(e.currentTarget.value )}
          type="text"
        />
        <CustomInput
          labelText="Password"
          id="password"
          formControlProps={{
            fullWidth: true
          }}
          handleChange={e=> setPassword(e.currentTarget.value )}
          type="password"
        />

        <Button
          type="button"
          color="primary"
          className="form__custom-button"
          onClick={()=> onButtonClick(email, password)}>
          Log in
        </Button>
      </form>
    </div>
  );
}

export default LoginForm