import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import "./PageFAQ.css";
import Logo from "./assets/chatgpt.png";
import TextBar from "./assets/search.png";
import Tabs from "./assets/tabs.png";

function PageFAQ() {
  const [displayText, setDisplayText] = useState(""); // Text to display in typewriter effect

  const handleButtonClick = (text) => {
    setDisplayText(text); // Update the text to display
  };

  return (
    <div className="window">
      <div className="left-panel">
        <button className="about-button">About DataQuest</button>
      </div>

      <div className="button-container">
        <div className="buttons">
          <button
            onClick={() =>
              handleButtonClick(
                "DataQuest is a week-long hackathon where students apply technical skills to solve real-world, data-centric challenges using tools like Excel or Python. The event includes workshops and talks from industry professionals, a case competition with presentations, and networking opportunities through booths and coffee chats with company representatives. It's an exciting platform for exploring data science, connecting with industry leaders, and building innovative solutions."
              )
            }
          >
            Tell me about DataQuest!
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "The event is open to students from all across North America, regardless of experience level."
              )
            }
          >
            Who can participate?
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "The event is open to students from all across North America, regardless of experience level."
              )
            }
          >
            Do I need a team/experience to participate?
          </button>
          <button
            onClick={() =>
              handleButtonClick("No, you don't! Teams can be formed during the event (teams of 4 are recommended), and prior experience isn't required. This is an excellent opportunity to learn, collaborate, and grow alongside others!")
            }
          >
            What can I expect at DataQuest?
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "DataQuest will take place at the University of Western Ontario campus. The event will combine online and in-person activities. Day 0 (lead-up) and Day 4 (judging and closing ceremony) will be online, while Days 1-3 will be held in person at Western University, featuring workshops, networking booths, and the project showcase."
              )
            }
          >
            Where will DataQuest take place?
          </button>
        </div>
        <img src={Logo} alt="Chat Logo" className="container-icon" />
        <div className="display-text">
          {displayText && (
            <Typewriter
              options={{
                strings: [displayText],
                autoStart: true,
                loop: false, // Do not repeat the typing effect
                delay: 50, // Speed of typing (ms per character)
                cursor: "", // Removes the blinking cursor
              }}
            />
          )}
        </div>
        <img src={Tabs} className="tabs" />
        <img src={TextBar} alt="Text Bar" className="text-bar" />
      </div>
    </div>
  );
}

export default PageFAQ;
