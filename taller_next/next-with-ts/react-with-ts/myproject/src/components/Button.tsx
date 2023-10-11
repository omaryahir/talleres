import { FC } from "react";

                   // this comes from props.value
const Button: FC<{ value: string }> = ({ value }): JSX.Element => {
    return <button className="calc-btn border">{ value }</button>
}