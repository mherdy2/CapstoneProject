import  { useState } from 'react';
import './login.css';

const LoginSample = () => {
  const [action, setAction] = useState("Log In");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showHaveAccount, setShowHaveAccount] = useState(false); // Define showHaveAccount state

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
  };

  const handleHaveAccountClick = () => {
    setShowHaveAccount(true); // Set showHaveAccount to true
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === 'Log In' ? (
          <div></div>
        ) : (
          <div className="input">
            <img
              src="https://t4.ftcdn.net/jpg/02/29/75/83/240_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
              alt=""
              style={{ width: '25px', height: '25px' }}
            />
            <input type="text" placeholder='Name' />
          </div>
        )}
        <div className="input">
          <img
            src="https://t3.ftcdn.net/jpg/05/77/89/76/240_F_577897642_sRnb2LQ8fY6j0UTKP9pQFgogmmj69elv.jpg"
            alt=""
            style={{ width: '25px', height: '25px' }}
          />
          <input type="Email" placeholder='Email' />
        </div>
        <div className="input">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNwKPqvSpkdwwxoE_cLTfT6d3f8PMIE7dovg&usqp=CAU"
            alt=""
            style={{ width: '25px', height: '25px' }}
          />
          <input type="Password" placeholder='Password' />
        </div>
      </div>
      {action === 'Sign Up' ? (
        <div></div>
      ) : (
        <div className="forgot-password" onClick={handleForgotPasswordClick}>
          Forgot Password? <span>Click Here!</span>
        </div>
      )}
      {action === 'Log In' ? (
        <div></div>
      ) : (
        <div className="forgot-password" onClick={handleHaveAccountClick}>
          Have an Account? <span>Click Here!</span>
        </div>
      )}
      {showForgotPassword && (
        <div className="forgot-password-message">
          To reset your password, please check your email.
        </div>
      )}
      <div className="submit-container">
        <div
          className={action === 'Log In' ? 'submit gray' : 'submit'}
          onClick={() => {
            setAction('Sign Up');
            setShowForgotPassword(false);
          }}
        >
          Sign Up
        </div>
        <div
          className={action === 'Sign Up' ? 'submit gray' : 'submit'}
          onClick={() => {
            setAction('Log In');
            setShowForgotPassword(false);
          }}
        >
          Log In
        </div>
      </div>
    </div>
  );
};

export default LoginSample;
