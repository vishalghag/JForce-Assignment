const useValidaion = (
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
) => {
  let email = emailRef.current ? emailRef.current.value : "";
  let password = passwordRef.current ? passwordRef.current.value : "";
  let confirmPasswordNew = confirmPassword.current
    ? confirmPassword.current.value
    : "";
  let name = nameRef.current ? nameRef.current.value : "";
  let phoneNumber = phoneNumberRef.current ? phoneNumberRef.current.value : "";

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (e.target.value === "Login") {
    if (!email) {
      setEmailError(true);
    } else if (!emailRegex.test(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (password.length < 6) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (emailRegex.test(email) && password.length >= 6) {
      let storeData = JSON.parse(localStorage.getItem("username"));
      if (storeData.email === email && storeData.password === password) {
        navigate("/user");
      } else {
        alert("user is not regsiter or email and password might be worng");
      }
    }
  }
  if (e.target.value === "Register") {
    if (!email) {
      setEmailError(true);
    } else if (!emailRegex.test(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (password.length < 6) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (password !== confirmPasswordNew) {
      setConfirmPasswordError(true);
    } else {
      setConfirmPasswordError(false);
    }

    if (name < 3) {
      setUserNameError(true);
    } else {
      setUserNameError(false);
    }

    if (phoneNumber < 10) {
      setPhoneNumberError(true);
    } else {
      setPhoneNumberError(false);
    }

    if (
      emailRegex.test(email) &&
      password.length >= 6 &&
      confirmPasswordNew === password &&
      name.length >= 3 &&
      phoneNumber.length >= 10
    ) {
      alert("User Successfully Register");
      let data = {
        email: email,
        password: password,
        confirmPassword: confirmPasswordNew,
        name: name,
        phoneNumber: phoneNumber,
      };
      localStorage.setItem("username", JSON.stringify(data));
      // Clear input fields
      emailRef.current.value = "";
      passwordRef.current.value = "";
      confirmPassword.current.value = "";
      nameRef.current.value = "";
      phoneNumberRef.current.value = "";
      setToggle(!toggle);
    }
  }
};

export default useValidaion;
