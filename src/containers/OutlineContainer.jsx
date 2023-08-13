import React from "react";
import OutlineForm from "../components/OutlineForm";
import OutlinePromptResults from "../components/OutlinePromptResults";
import FinalOutline from "../components/FinalOutline";
import {Button} from '@mui/material'

export default function OutlineContainer() {
        // add clickhandler to button to send user to article editor 
        return (
            <div>
                <OutlineForm />
                <OutlinePromptResults />
                <FinalOutline />
                <Button variant="contained" color="primary">Write Article</Button>
            </div>
        );
    }