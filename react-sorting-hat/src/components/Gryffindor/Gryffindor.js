import React from 'react';
import './Gryffindor.css';
import { HouseContainer } from '../../ReusableStyles';

const Gryffindor = () => {
    return (
        <HouseContainer className="GryfCont">
            <div>
                <h1>Gryffindor</h1>
                <h2>Founder: Godric Gryffindor</h2>
                <h2>Emblematic animal: Lion</h2>
                <h2>Element: Fire</h2>
                <h2>Colors: Scarlet, Gold</h2>
                <h2>Head: Minerva McGonagall</h2>
                <h2>House Ghost: Nearly headless Nick</h2>
            </div>
            <dl>
                Values:
                <li>courage</li>
                <li>chivalry</li>
                <li>bravery</li>
                <li>determination</li>
                <li>daring</li>
            </dl>
            <dl>
                Famous members:
                <li>Albus Dumbledore</li>
                <li>Rubeus Hagrid</li>
                <li>Minerva McGonagall</li>
                <li>Sirius Black</li>
                <li>Peter Pettigrew</li>
            </dl>
            <div>
                <h2>Summary:</h2>
                <p>Some that may not like you may say you are arrogant, act high and mighty and get hand outs that you may not deserve. Whatever, you work hard.</p>
            </div>
        </HouseContainer>
    );
};

export default Gryffindor;