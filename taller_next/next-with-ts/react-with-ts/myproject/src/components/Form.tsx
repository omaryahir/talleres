import { ChangeEventHandler, FormEventHandler, FC, useState } from "react";
import Button from "./Button";
interface Props {}

const Form: FC<Props> = () => {
  // since this is an empty string value is by infer string
  // another option is to use the next sentence:
  // const [ value, setValue ] = useState<string>();
  const [ value, setValue ] = useState(''); 
  const [ file, setFile ] = useState<File>(); 
  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {

  }

  return (
    <form onSubmit={handleSubmit} className="flex-col">
      <input
        className="border padding-10"
        type="file"
        value={value}
        onChange={({target}) => {
          const { files } = target;
          if (files) {
            const file = files[0];
            setFile(file)
          }          
        }}
      />
      <div className="padding-10" />
      <input
        className="border padding-10"
        type="text"
        value={value}
        onChange={handleOnChange}
      />
      <div className="padding-10" />
      <Button value="Submit" />
      </form>
  );
}

export default Form;