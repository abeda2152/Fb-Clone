import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} exact />
        <Route path="/profile" element={<Profile />} exact />
        <Route path="/" element={<Home />} exact /> {/*main page*/}
      </Routes>
    </div>
  );
}

export default App;

/*function App() {
  const get = async () => {
    const res = fetch("http://localhost:8000");
    console.log(res);
  };
  get();
  return <div>welcome to frontend</div>;
}*/
