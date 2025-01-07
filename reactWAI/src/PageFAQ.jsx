import "./PageFAQ.css";

function PageFAQ() {
  return (
    <div className="window">
      <div className="left-panel">
        <button className="about-button">About DataQuest</button>
      </div>
      <div className="right-panel">
        <div className="button-container">
          <button>Tell me about DataQuest!</button>
          <button>Who can participate?</button>
          <button>Do I need a team/experience to participate?</button>
          <button>What can I expect at DataQuest?</button>
          <button>Where will DataQuest take place?</button>
        </div>
      </div>
    </div>
  );
}

export default PageFAQ;
