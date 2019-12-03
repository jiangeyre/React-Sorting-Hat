import React from "react";
import "./Ravenclaw.css";
import { HouseContainer } from "../../ReusableStyles";

const Ravenclaw = () => {
  return (
    <HouseContainer className="RavCont">
      <div>
        <h1>Hufflepuff</h1>
        <h2>Founder: Rowena Ravenclaw</h2>
        <h2>Emblematic animal: Eagle</h2>
        <h2>Element: Air</h2>
        <h2>Colors: Blue, Bronze</h2>
        <h2>Head: Filius Flitwick</h2>
        <h2>House Ghost: The grey lady</h2>
      </div>
      <dl>
        Values:
        <li>wisdom</li>
        <li>intelligence</li>
        <li>creativity</li>
        <li>individuality</li>
        <li>acceptance</li>
      </dl>
      <dl>
        Famous members:
        <li>Garrick Ollivander</li>
        <li>Ignatia Wildsmith</li>
        <li>Laverne de Montmorency</li>
        <li>Xenophilius Lovegood</li>
        <li>Gilderoy Lockhart</li>
      </dl>
      <div>
        <h2>Summary:</h2>
        <p>Some that may not like you may say you are a nerd or a weirdo and you may be a loner. So what, you are unique.</p>
      </div>
    </HouseContainer>
  );
};

export default Ravenclaw;