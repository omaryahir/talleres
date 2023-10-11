import { FC } from "react";

interface Props {
    value: string;
    onClick?: () => void;
}

const Button: FC<Props> = ({ value, onClick }): JSX.Element => {
    return <button style={{backgroundColor: "#1111ff", color: "white"}} className="calc-btn border" onClick={onClick}>{ value }</button>
}

export default Button;