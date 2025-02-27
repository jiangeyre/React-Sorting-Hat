
import React from "react";
import "./Hufflepuff.css";
import { HouseContainer } from "../../ReusableStyles";

const Hufflepuff = () => {
  return (
    <HouseContainer className="HuffCont">
      <div>
        <h1>Hufflepuff</h1>
        <h2>Founder: Helga Hufflepuff</h2>
        <h2>Emblematic animal: Badger</h2>
        <h2>Element: Earth</h2>
        <h2>Colors: Yellow, Black</h2>
        <h2>Head: Pomona Sprout</h2>
        <h2>House Ghost: Fat Friar</h2>
      </div>
      <dl>
        Values:
        <li>dedication</li>
        <li>patience</li>
        <li>loyalty</li>
        <li>tolerance</li>
        <li>fairness</li>
      </dl>
      <dl>
        Famous members:
        <li>Newton Scamander</li>
        <li>Gorgan Stump</li>
        <li>Bridget Wenlock</li>
        <li>Nymphadora Tonks</li>
        <li>Pomona Sprout</li>
      </dl>
      <div>
        <h2>Summary:</h2>
        <p>Some that may not like you may say you are as vanilla as they come. Boring and don't stand out. Doesn't matter, you do you.</p>
      </div>
    </HouseContainer>
  );
};

export default Hufflepuff;