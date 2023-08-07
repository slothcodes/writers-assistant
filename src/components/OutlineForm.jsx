// import react
import React from "react";
// use mui
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector } from "react-redux"; 
import {setText} from '../slices/testSlice'
import { useDispatch } from "react-redux";

export default function OutlineForm() {
    
    const [inputValue, setInputValue] = React.useState('');
    const dispatch = useDispatch();
    // handle change of input state
    const handleChange = (event) => {
        setInputValue(event.target.value);
    }
    // handle submit to django backend
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted:',inputValue)
        dispatch(setText(inputValue))
    }

  return (
    <div>
      {/* outliner form */}
      <form onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={handleChange}/>
        <Button variant="contained" type="submit" onSubmit={handleSubmit}>Default</Button>
      </form>
    </div>
  );
}