import React from "react";
import { useForm } from "react-hook-form";

const Login = ({ ToggleForm, IsLoggedIn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const storedDataString = localStorage.getItem("formData");

    if (storedDataString) {
      const storedData = JSON.parse(storedDataString);

      if (
        data.Email == storedData.Email &&
        data.Password == storedData.Password
      ) {
        IsLoggedIn();
      } else {
        alert("Enter Valid Credentials");
      }
    } else {
      alert("No data stored in local storage.");
    }
  };

  return (
    <>
      <h1 style={{ fontSize: "30px", fontWeight: "normal" }}>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Email"
          {...register("Email", {
            required: true,
            min: -1,
            pattern: /^\S+@\S+$/i,
          })}
        />
        {errors.Email && <p>Enter a Valid Email id</p>}

        <input
          type="password"
          placeholder="Password"
          {...register("Password", {
            required: true,
            min: 4,
            maxLength: 12,
            pattern:
              /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/i,
          })}
        />
        {errors.Password && <p>Incorrect Password</p>}

        <input type="submit" />
        <h1
          style={{ fontSize: "15px", cursor: "pointer" }}
          onClick={() => ToggleForm()}
        >
          {" "}
          Not a User ? SignUp Here
        </h1>
      </form>
    </>
  );
};

export default Login;
