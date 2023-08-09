import React from "react";
import OutlineForm from "../components/OutlineForm";
import OutlinePromptResults from "../components/OutlinePromptResults";
import FinalOutline from "../components/FinalOutline";

export default function OutlineContainer() {
    
        return (
            <div>
                <OutlineForm />
                <OutlinePromptResults />
                <FinalOutline />
            </div>
        );
    }