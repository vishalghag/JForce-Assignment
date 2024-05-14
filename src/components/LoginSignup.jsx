import React, { useRef, useState } from "react";
import CommponInput from "../common/CommponInput";
import CommonButton from "../common/CommonButton";
import Validaion from "../utils/Validaion";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const navigate = useNavigate();

  const [userProfileDetails, setUserProfileDetails] = useState();

  let emailRef = useRef(null);
  const [emailError, setEmailError] = useState(false);
  let passwordRef = useRef(null);
  const [passwordError, setPasswordError] = useState(false);
  let confirmPassword = useRef(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  let nameRef = useRef(null);
  const [userNameError, setUserNameError] = useState(false);
  let phoneNumberRef = useRef(null);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [toggle, setToggle] = useState(true);

  const toogleFn = () => {
    setToggle(!toggle);
  };

  const submitHandler = (e) => {
    Validaion(
      e,
      emailRef,
      passwordRef,
      confirmPassword,
      nameRef,
      phoneNumberRef,
      setEmailError,
      setPasswordError,
      setConfirmPasswordError,
      setUserNameError,
      setPhoneNumberError,
      navigate,
      setToggle,
      toggle
    );
  };

  return (
    <div className=" flex flex-col bg-gray-500/50 h-full mt-[12%] m-4 md:rounded-xl rounded-md">
      <h1 className=" mt-5 text-2xl font-medium text-orange-500">
        {toggle ? "Login" : "Registration"}
      </h1>
      <CommponInput
        inputType={"email"}
        inputPlaceholder={"Enter your email"}
        inputRef={emailRef}
        inputError={emailError ? "Please enter correct email" : ""}
      />
      <CommponInput
        inputType={"password"}
        inputPlaceholder={"Enter your password"}
        inputRef={passwordRef}
        inputError={
          passwordError ? "Please enter password more than 6 char" : ""
        }
      />

      {!toggle && (
        <>
          <div>
            <CommponInput
              inputType={"text"}
              inputPlaceholder={"Confirm password"}
              inputRef={confirmPassword}
              inputError={
                confirmPasswordError ? "Please enter above password only" : ""
              }
            />
            <CommponInput
              inputType={"text"}
              inputPlaceholder={"Enter your name"}
              inputRef={nameRef}
              inputError={
                userNameError ? "Please enter value above 3 char" : ""
              }
            />
            <CommponInput
              inputType={"number"}
              inputPlaceholder={"Enter your phone number"}
              inputRef={phoneNumberRef}
              inputError={
                phoneNumberError ? "Number should be of 10 digit" : ""
              }
            />
          </div>
        </>
      )}

      <CommonButton
        buttonName={toggle ? "Login" : "Register"}
        btnName={toggle ? "Login" : "Register"}
        buttonOnClick={submitHandler}
      />
      <h3 onClick={toogleFn} className=" cursor-pointer">
        {toggle ? "Don't have a account ?" : "Have an account"}
      </h3>
    </div>
  );
};

export default LoginSignup;
