import React, { useReducer } from "react";

function LoginPage() {
const [state, dispatch] = useReducer((state, action) => {
  switch(action.type){
   case "USER_INPUT": {
    return {
      ...state,
      Name: action.value,
      NameError: validateName(action.value)
    };
    }
    case"INPUT_BLUR": {
      return {
        ...state,
        emailAddress: action.value,
        emailAddressError: validateEmailAddress(action.value)
      };
    }
    case "SUBMIT":
  const NameError = validateName(action.Name);
  const emailAddressError = validateEmailAddress(action.emailAddress);
  if (NameError === "" && emailAddressError === "") {
    const submitResult = props.onSignUp({
      Name: action.Name,
      emailAddress: action.emailAddress
    });
    return {
      ...state,
      NameError,
      emailAddressError,
      submitted: true,
      submitResult
    };
  } else {
    return {
      ...state,
      NameError,
      emailAddressError
    };
  }
  default:
    return state;
  }
},defaultState);

const validateName = (value) => {
    const error = value ? "" : "You must enter your name";
    return error;
  };
  const validateEmailAddress = (value) => {
    const error = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      value
    )
      ? ""
      : "You must enter a valid email address";
    return error;
  };

  const handleNameChange = (e) => {
    dispatch({
      type: "NAME_CHANGE",
      value: e.currentTarget.value
    });
  };
  
  const handleEmailAddressChange = (e) => {
    dispatch({
      type: "EMAILADDRESS_CHANGE",
      value: e.currentTarget.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "SUBMIT",
      Name: state.Name,
      emailAddress: state.emailAddress
    });
    console.log(state)
    localStorage.setItem("logedIn","1")
    props.clickLogin(true)
  };
 

<form noValidate={true} onSubmit={handleSubmit}>
  <div className="row">
    <label htmlFor="Name">First name</label>
    <input
      id="Name"
      value={state.Name}
      onChange={handleNameChange}
    />
    <span className="error">{state.NameError}</span>
  </div>

  <div className="row">
    <label htmlFor="emailAddress">Email address</label>
    <input
      id="emailAddress"
      value={state.emailAddress}
      onChange={handleEmailAddressChange}
    />
    <span className="error">{state.emailAddressError}</span>
  </div>

  <div className="row">
    <button
      type="submit"
      disabled={state.submitted && state.submitResult.success}
    >
      LogIn
    </button>
  </div>

  {state.submitted && (
    <div className="row">
      <span
        className={
          state.submitResult.success ? "submit-success" : "submit-failure"
        }
      >
        {state.submitResult.message}
      </span>
    </div>
  )}
</form>
}

export default LoginPage;
