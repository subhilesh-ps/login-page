const Home = ({ IsLoggedIn }) => {
  const storedDataString = localStorage.getItem("formData");
  const storedData = JSON.parse(storedDataString);
  const user = storedData.Username;

  const HandleLogout = () => {
    localStorage.removeItem("formData");
    IsLoggedIn();
  };

  return (
    <div className="home">
      <h2> Welcome to Home page {user} </h2>
      <button onClick={() => HandleLogout()}>Logout</button>
    </div>
  );
};

export default Home;
