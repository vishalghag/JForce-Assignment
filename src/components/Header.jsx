// Header.js
import React, { useState, useEffect } from "react";
import CommonButton from "../common/CommonButton";
import { useNavigate } from "react-router-dom";
import CommponInput from "../common/CommponInput";

const Header = () => {
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    phoneNumber: "",
  });

  useEffect(() => {
    // Fetch user data from localStorage when component mounts
    const storedUserData = JSON.parse(localStorage.getItem("username"));
    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);

  const handleEditProfile = () => {
    setEditing(true);
  };

  const handleSaveProfile = (e) => {
    if (e.target.value === "save") {
      localStorage.setItem("username", JSON.stringify(userData));
      setEditing(false);
    }
    if (e.target.value === "cancel") {
      setEditing(!editing);
    }
  };

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="https://flowbite.com" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              JForce
            </span>
          </a>
          <div className="flex mt-4">
            {editing ? (
              <>
                <div className=" flex mt-[15%] flex-col">
                  <CommponInput
                    inputType={"text"}
                    inputValue={userData.name}
                    monitorState={(e) =>
                      setUserData({ ...userData, name: e.target.value })
                    }
                  />
                  <CommponInput
                    inputType={"number"}
                    inputValue={userData.phoneNumber}
                    monitorState={(e) =>
                      setUserData({ ...userData, phoneNumber: e.target.value })
                    }
                  />
                  <div className=" flex flex-row items-center justify-center">
                    <CommonButton
                      buttonName={"Save"}
                      btnName={"save"}
                      buttonOnClick={handleSaveProfile}
                    />

                    <CommonButton
                      buttonName={"Cancel"}
                      btnName={"cancel"}
                      buttonOnClick={handleSaveProfile}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <CommonButton
                  buttonName={"Report"}
                  buttonOnClick={() =>
                    alert("In given task there is no part regarding Report")
                  }
                />
                <CommonButton
                  buttonName={"Edit Profile"}
                  buttonOnClick={handleEditProfile}
                />
                <CommonButton
                  buttonName={"Logout"}
                  buttonOnClick={() => navigate("/")}
                />
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
