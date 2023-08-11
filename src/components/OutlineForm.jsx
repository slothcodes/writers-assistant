// import react
import React from "react";
// use mui
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useSelector } from "react-redux"; 
import {setText} from '../slices/testSlice'
import { useDispatch } from "react-redux";

export default function OutlineForm() {
    const [promptSelection, setPromptSelection] = React.useState('');
    const [inputValue, setInputValue] = React.useState('');
    const dispatch = useDispatch();
    // handle change of input state
    const handleChange = (event) => {
        setInputValue(event.target.value);
    }
    // handle submit to django backend which returns a json object with the text
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Submitted:',inputValue)
        const response = await fetch('/getCompletion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({text: inputValue}),
        })
        console.log(response)
        const results = await response.json()
        dispatch(setText(results.text))
    }

  return (
    <div>
      <form onSubmit={handleSubmit} className="prompt-form">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={handleChange}/>
        <FormControl>
          <InputLabel id="prompt-selection">Options</InputLabel>
          <Select
            labelId="prompt-selection"
            id="prompt-selection"
            value={promptSelection}
            label="Options"
            onChange={(event)=>setPromptSelection(event.target.value)}
          >
            <MenuItem value="questions">Questions</MenuItem>
            <MenuItem value="mistakes">Mistakes</MenuItem>
            <MenuItem value="myths">Myths</MenuItem>
            <MenuItem value="tips">Tips</MenuItem>
          </Select>         
        </FormControl>
        <Button variant="contained" type="submit" onSubmit={handleSubmit}>Default</Button>
      </form>
      <div className="prompt-results">

      </div>
      <div className="final-outline">

      </div>
    </div>
  );
}