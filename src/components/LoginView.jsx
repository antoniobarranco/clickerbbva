import React from 'react';
import { useNavigate } from 'react-router-dom';

import useForm from '../hooks/useForm';
import BreadCrumbs from './ui/BreadCrumbs';

function LoginView() {
  const [formValues, handleInputChange] = useForm({ userName: '' });

  const { userName } = formValues;

  const navigate = useNavigate();

  const handlePlay = (e) => {
    e.preventDefault();
    navigate(`/game?player=${userName.toLowerCase()}`);
  };

  return (

    <>
      <BreadCrumbs Text="Please, enter your name..." />

      <div className="d-grid gap-2 col-6  my-5 mx-auto">

        <form onSubmit={handlePlay}>

          <div className="input-group mb-3">
            <input type="text" name="userName" value={userName} onChange={handleInputChange} required pattern="[a-zA-Z0-9-]+" min="3" max="25" className="form-control" placeholder="Put your name" aria-label="User name to play" aria-describedby="button-submit" />
            <button className="btn btn-primary" type="submit" id="button-submit">Let&apos;s Play</button>
          </div>

        </form>

        <div className="alert alert-primary" role="alert">You can choose a name composed by letters and numbers. Minimum size is 3 and maximum 25. Remember that if you already played your progress was saved.</div>

      </div>
    </>

  );
}

export default LoginView;
