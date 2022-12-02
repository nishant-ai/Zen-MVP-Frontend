import { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home/Home";
import Chat from "./Pages/Chat/Chat";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";

function App() {
  useEffect(() => {
    // Cursor
    const cursor = document.querySelector(".cursor");
    document.addEventListener("mousemove", (e) => {
      cursor.setAttribute(
        "style",
        "top: " + (e.pageY - 25) + "px; left: " + (e.pageX - 25) + "px;"
      );
    });
  }, []);

  return (
    <div className="App">
      {/* <div className="cursor"></div> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/chat" element={<Chat />} />
          <Route exact path="/user/login" element={<Login />} />
          <Route exact path="/user/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
