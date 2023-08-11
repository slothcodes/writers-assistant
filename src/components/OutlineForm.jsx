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
    const [promptSelection, setPromptSelection] = React.useState('questions');
    const [inputValue, setInputValue] = React.useState('');
    const dispatch = useDispatch();
    // handle change of input state
    const handleChange = (event) => {
        setInputValue(event.target.value);
    }
    // Handle change of dropdown selection
    const handleDropdownChange = (event) => {
      setPromptSelection(event.target.value);
    }
    // Validate Prompt Input
    const validatePromptInput = () => {
      // check if input is between minimum and maximum number of characters
      if (inputValue.length < 10 || inputValue.length > 200) {
        return 'Prompt must be between 10 and 200 characters';
      }
      return null; // Indicates valid prompt
    }
    

    // handle submit to django backend
    const handleSubmit = async (event) => {
      if (validatePromptInput() === null) {
        event.preventDefault();
        // prepare data to send
        const dataToSend = {
            promptText: inputValue,
            promptType: promptSelection
        }
        const response = await fetch('/getCompletion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend),
        })
        const results = await response.json()
        // split results into list
        const resultList = results.list[0].split('\n')
        dispatch(setText(resultList))
      }
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
            onChange={handleDropdownChange}
          >
            <MenuItem value="questions">Questions</MenuItem>
            <MenuItem value="mistakes">Mistakes</MenuItem>
            <MenuItem value="myths">Myths</MenuItem>
            <MenuItem value="facts">Facts</MenuItem>
            <MenuItem value="tips">Tips</MenuItem>
            <MenuItem value="benefits">Benefits</MenuItem> 
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