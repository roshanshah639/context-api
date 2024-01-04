import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserSontextProvider from "./context/UserSontextProvider";

function App() {
  return (
    <>
      <UserSontextProvider>
        <h1>Context API</h1>
        <Login />
        <Profile />
      
      </UserSontextProvider>
    </>
  );
}

export default App;
