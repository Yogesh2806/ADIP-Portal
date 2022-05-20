import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Home from "./componentPages/Home";
import StickyFooter from "./components/StickyFooter";
import OnboardCheckout from "./componentPages/OnboardCheckout";
import UniqueCardPage from "./componentPages/CardPage";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import InfoPage from "./componentPages/InfoPage";
import ContactPage from "./componentPages/ContactPage";
import SignUp from "./componentPages/auth/auth";
import Faq from "./componentPages/Faq";
import Downloads from "./componentPages/Downloads";
import NationalList from "./componentPages/NationalList";
import Request from "./componentPages/Request";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/onboarding" element={<OnboardCheckout />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/request" element={<Request />} />
          <Route path="/info/nationalList" element={<NationalList />} />
          <Route path="/ucard" element={<UniqueCardPage />} />
          <Route path="/info" element={<InfoPage />} />
        </Routes>
        <StickyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
