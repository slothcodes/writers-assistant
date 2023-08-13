import React from "react"
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { addToOutLine } from "../slices/outLineSlice";

export default function SubheadingCard(props) {

    return (
        <div className="subheading-card">
            <div className="subheading-text">
                <p>{props.Subheading}</p>
            </div>
            <Button value={props.Subheading} variant="contained" onClick={props.clickHandler} disabled={props.disabled}>Add</Button>
        </div>
    )
}