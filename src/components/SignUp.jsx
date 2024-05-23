import { useForm } from "react-hook-form";

const SignUp = ({ ToggleForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // Convert the data to a JSON string before storing it in local storage
    localStorage.setItem("formData", JSON.stringify(data));
    console.log(data);
    ToggleForm();
  };
  return (
    <>
      {" "}
      <h1 style={{ fontSize: "30px", fontWeight: "normal" }}>Signup Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Username"
          {...register("Username", { required: true, min: 3, maxLength: 80 })}
        />
        {errors.Username && <p>Enter your User Name</p>}

        <input
          type="text"
          placeholder="Email"
          {...register("Email", {
            required: true,
            min: -1,
            pattern: /^\S+@\S+$/i,
          })}
        />
        {errors.Email && <p>Enter a Valid Email</p>}

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
        {errors.Password && (
          <p>
            password should contain upper Cause an Lower Cause characters,
            Numbers an Symbols
          </p>
        )}

        <input type="submit" />
        <h1
          style={{ fontSize: "15px", cursor: "pointer" }}
          onClick={() => ToggleForm()}
        >
          Already a User ? Login
        </h1>
      </form>
    </>
  );
};

export default SignUp;
