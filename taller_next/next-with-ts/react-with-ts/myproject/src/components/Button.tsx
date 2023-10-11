import { FC } from "react";

interface Props {
    value: string
}

const Button: FC<Props> = ({ value }): JSX.Element => {
    return <button className="calc-btn border">{ value }</button>
}