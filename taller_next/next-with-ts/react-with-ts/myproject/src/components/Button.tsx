import { FC } from "react";

interface Props {
    value: string;
    onClick: () => void;
}

const Button: FC<Props> = ({ value, onClick }): JSX.Element => {
    return <button className="calc-btn border" onClick={onClick}>{ value }</button>
}