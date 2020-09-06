import React from 'react';
import '../styles/Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase/firebase';
import { useStateValue } from '../context/StateProvider';
import { actionTypes } from '../context/reducer';

const Login = () => {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="data:image/png;base64,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"
          alt="clack logo"
        />
        <h1>signin to react slack clone</h1>
        <Button onClick={signIn}>Sign In with google</Button>
      </div>
    </div>
  );
};

export default Login;
