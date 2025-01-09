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
                "DataQuest is an AI hackathon! DataQuest is an AI hackathon!DataQuest is an AI hackathon!DataQuest is an AI hackathon!DataQuest is an AI hackathon!DataQuest is an AI hackathon!DataQuest is an AI hackathon!DataQuest is an AI hackathon!DataQuest is an AI hackathon!DataQuest is an AI hackathon!DataQuest is an AI hackathon!DataQuest is an AI hackathon!DataQuest is an AI hackathon!DataQuest is an AI hackathon!DataQuest is an AI hackathon!"
              )
            }
          >
            Tell me about DataQuest!
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "Anyone with an interest in AI can participate."
              )
            }
          >
            Who can participate?
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "No prior experience or team is needed to join."
              )
            }
          >
            Do I need a team/experience to participate?
          </button>
          <button
            onClick={() =>
              handleButtonClick("Expect engaging workshops and networking.")
            }
          >
            What can I expect at DataQuest?
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "DataQuest will take place at Western University."
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
