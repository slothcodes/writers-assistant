import React from "react";
import {setText} from '../slices/testSlice'
import { useDispatch, useSelector } from "react-redux";

export default function OutlinePromptResults() {
    const dispatch = useDispatch();
    // make list of divs for each item in results list from redux store
    const resultsList = useSelector(state => state.outlinePromptResults.results)
    const subheadingComponents = resultsList.map((item,index) => {
           return <div key={index} className="subheading"> <h2>{item}</h2></div>
    })

    return (
        <div className="prompt-results">
            <h1>Prompt Results</h1>
            {subheadingComponents}
        </div>
    );
}