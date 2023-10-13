import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import SinglePost from "./components/singlePost/SinglePost";
import Write from "./pages/write/Write";

function App() {
  const user = false;
  return (
    <Router> 
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={user ? <Home /> : <Register />} />
        <Route exact path="/login" element={user ? <Home /> : <Login />} />
        <Route exact path="/write" element={user ? <Write /> : <Register />} />
        <Route exact path="/settings" element={user ? <Settings /> : <Register />} />
        <Route exact path="/posts/:postId" element={<SinglePost />} />
      </Routes>
    </Router> 
  );
}

export default App;
