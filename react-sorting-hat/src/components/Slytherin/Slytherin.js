import React from "react";
import "./Slytherin.css";
import { HouseContainer } from "../../ReusableStyles";

const Slytherin = () => {
  return (
    <HouseContainer className="SlyCont">
      <div>
        <h1>Slytherin</h1>
        <h2>Founder: Salazar Slytherin</h2>
        <h2>Emblematic animal: Serpent</h2>
        <h2>Element: Water</h2>
        <h2>Colors: Green, Silver</h2>
        <h2>Head: Severus Snape</h2>
        <h2>House Ghost: Bloody Baron</h2>
      </div>
      <dl>
        Values:
        <li>cunning</li>
        <li>resourcefulness</li>
        <li>ambition</li>
        <li>self-preservation</li>
        <li>fraternity</li>
      </dl>
      <dl>
        Famous members:
        <li>Merlin</li>
        <li>Horace Slughorn</li>
        <li>Gormlaith Gaunt</li>
        <li>Tom Riddle</li>
        <li>Severus Snape</li>
      </dl>
      <div>
        <h2>Summary:</h2>
        <p>Some that may not like you may say you are pretty much the bad guy. Always conspiring, always evil. Thats fine, you don't care what others say.</p>
      </div>
    </HouseContainer>
  );
};
export default Slytherin;