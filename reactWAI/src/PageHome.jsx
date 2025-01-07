import Text from "./assets/text.png";
import "./PageHome.css";

function PageHome() {
  return (
    <div>
      <img className="pagehome-img" src={Text} alt="Dataquest Text" />
      <p className="description">
        Western's largest and greatest AI Hackathon.
      </p>
      <p className="date">//March 22, 2025</p>
    </div>
  );
}

export default PageHome;
