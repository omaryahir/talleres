import { FC } from "react";
import Button from "./Button";

const Calculator: FC = (): JSX.Element => {
    return <div className="border padding-10">
        <div className="calculator-screen border">
            <span>0</span>
            <span className="result">0</span>
        </div>
        <div className="btn-wrapper">
            <Button value="1" />
            <Button value="2" />
            <Button value="3" />
        </div>
        <div className="btn-wrapper">
            <Button value="4" />
            <Button value="5" />
            <Button value="6" />
        </div>
        <div className="btn-wrapper">
            <Button value="7" />
            <Button value="8" />
            <Button value="9" />
        </div>
        <div className="btn-wrapper">
            <Button value="0" />
            <Button value="+" />
            <Button value="-" />
        </div>
        <div className="btn-wrapper">
            <Button value="/" />
            <Button value="*" />
            <Button value="=" />
        </div>        
    </div>;
}

export default Calculator;