import React from "react";
import OutlineForm from "../components/outlineComponents/OutlineForm";
import OutlinePromptResults from "../components/outlineComponents/OutlinePromptResults";
import FinalOutline from "../components/outlineComponents/FinalOutline";
import {Button} from '@mui/material'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setArticle } from "../slices/articleSlice";
import { ContentState, convertFromRaw, convertToRaw } from "draft-js";

export default function OutlineContainer(props) {
        // add clickhandler to button to send user to article editor 
        const dispatch = useDispatch()
        const outLineList = useSelector(state => state.outline.outline)
        const articleState = useSelector(state => state.article.article)
        const clickHandler = async () => {
            // send request for article to backend
            const article = await fetch('/getArticle', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({promptText: outLineList.join(','), promptType: 'article'}),
            })
            // get response from backend
            const articleJson = await article.json()
            // convert article to raw for draftjs
            const convertedToContentState = ContentState.createFromText(articleJson.article) 
            const convertedArticle = convertToRaw(convertedToContentState)
            dispatch(setArticle(convertedArticle))
            // convert button to loading mui component while waiting for response
            // set article editor state to shown
            props.setEditorState()
        }
        return (
            <div>
                <OutlineForm />
                <OutlinePromptResults />
                <FinalOutline />
                <Button variant="contained" color="primary" onClick={clickHandler} >Write Article</Button>
                {articleState !== false ? <Button variant="contained" color="primary" onClick={props.setEditorState}>Article Editor</Button> : null}
            </div>
        );
    }