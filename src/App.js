import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Home from "./componentPages/Home";
import StickyFooter from "./components/StickyFooter";
// import SignIn from "./componentPages/SignIn";
// import SignUp from "./componentPages/SignUp";
import OnboardCheckout from "./componentPages/OnboardCheckout";
import UniqueCardPage from "./componentPages/CardPage";
import ChatBot from "./componentPages/ChatBot";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import InfoPage from "./componentPages/InfoPage";
import ContactPage from "./componentPages/ContactPage";
import SignUp from "./componentPages/auth/auth";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <ChatBot />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/signin" element={<SignIn />} /> */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/onboarding" element={<OnboardCheckout />} />
          <Route path="/ucard" element={<UniqueCardPage />} />
          <Route path="/info" element={<InfoPage />} />
        </Routes>
        <StickyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
