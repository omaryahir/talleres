import { FC } from "react";

const Calculator: FC = (): JSX.Element => {
    return <div className="border padding-10">
        <div className="calculator-screen border">
            <span>0</span>
            <span className="result">0</span>
        </div>
        <div className="btn-wrapper">
            <button className="calc-btn border">1</button>
            <button className="calc-btn border">2</button>
            <button className="calc-btn border">3</button>
        </div>
        <div className="btn-wrapper">
            <button className="calc-btn border">4</button>
            <button className="calc-btn border">5</button>
            <button className="calc-btn border">6</button>
        </div>
        <div className="btn-wrapper">
            <button className="calc-btn border">7</button>
            <button className="calc-btn border">8</button>
            <button className="calc-btn border">9</button>
        </div>
        <div className="btn-wrapper">
            <button className="calc-btn border">0</button>
            <button className="calc-btn border">+</button>
            <button className="calc-btn border">-</button>
        </div>
        <div className="btn-wrapper">
            <button className="calc-btn border">/</button>
            <button className="calc-btn border">*</button>
            <button className="calc-btn border">=</button>
        </div>        
    </div>;
}

export default Calculator;