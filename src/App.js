import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Home from "./componentPages/Home";
import StickyFooter from "./components/StickyFooter";
import SignIn from "./componentPages/SignIn";
import SignUp from "./componentPages/SignUp";
import OnboardCheckout from "./componentPages/OnboardCheckout";
import UniqueCardPage from "./componentPages/CardPage";
import ChatBot from "./componentPages/ChatBot";

// keep chat bot

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />

        {/* <UniqueCardPage /> */}
        <ChatBot />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/onboarding" element={<OnboardCheckout />} />
        </Routes>
        <StickyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
