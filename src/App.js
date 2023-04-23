import "./App.css";
import TopNavbar from "./components/navbar";
import Home from "./pages/home";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Profilepage from "./pages/profilepage";
import Updatepage from "./pages/updatepage";
import UpdatePassword from "./pages/updatepassword";
import ChangePasscode from "./pages/changepasscode";
import SearchUser from "./pages/searchuser";
import CommunityPage from "./pages/communitypage";
import OtherUserProfilepage from "./pages/otheruserprofilepage";
function App() {
  //Below DynamicRouting() component is created ,so that when we refresh the page ,the user data do not get lost .......
  //Also we used  DynamicRouting() component ,since App.js is first executed ,so we created a dynamic component to use 'useNavigate' function(as use Navigate function cannot be used in App.js ),
  function DynamicRouting() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
      const userData = JSON.parse(localStorage.getItem("user"));
      if (userData) {
        dispatch({ type: "LOGIN_SUCCESS", payload: userData });
        //navigate("/home");
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        dispatch({ type: "LOGOUT" });
        dispatch({ type: "LOGIN_ERROR" });
        navigate("/home");
      }
    }, []);
    return (
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/updatepage/:id" element={<Updatepage />}></Route>
        <Route
          exact
          path="/otherprofile/:id"
          element={<OtherUserProfilepage />}
        ></Route>
        <Route exact path="/profilepage/:id" element={<Profilepage />}></Route>
        <Route exact path="/search" element={<SearchUser />}></Route>
        <Route exact path="/communitypage" element={<CommunityPage />}></Route>
        <Route
          exact
          path="/changepassword/:id"
          element={<UpdatePassword />} // TO check authority of user for password change
        ></Route>
        <Route
          exact
          path="/changepasscode/:id"
          element={<ChangePasscode />} // To change the password
        ></Route>
      </Routes>
    );
  }
  return (
    <div className="App">
      {/* adding the navbar  */}

      <Router>
        <TopNavbar />
        <DynamicRouting />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
