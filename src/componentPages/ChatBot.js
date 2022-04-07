import React from "react";
import bot from "../icons/bot.svg";

const ChatBot = () => {
  function chatToggle() {
    const chatBot = document.querySelector(".chatBot");
    chatBot.classList.toggle("chatActive");
  }

  return (
    <>
      <div onClick={chatToggle} className="chatBotIcon chatClick">
        <img src={bot} alt="bot" />
      </div>
      <div className="chatBot">
        <div className="chatHeading">
          <h2>Help Desk</h2>
          <p>I am Iris, a Virtual Assistant How may I help you?</p>
        </div>
        <div className="chatMessage">
          <h2>Hello</h2>
        </div>
        <div className="chatInput">
          <input type="text" name="message" id="" />
          <button>SEND</button>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
