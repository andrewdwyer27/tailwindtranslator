import React, {useState, useEffect} from "react";
import {openai} from "../lib/openai";
import axios from "axios";

export default function ChatBox() {
    const [message, setMessage] = useState("");

    function handleChange(evt) {
        setMessage(evt.target.value);
        console.log(message);
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        //"http://localhost:3000/api/openai?variableName=variableValue"
        const response = await axios.get("http://localhost:3000/api/openai?name=andrew&name2=waqas");
        console.log(response.data.message);
        //https --> secure
        //http --> not secure 
        setMessage("");
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input value = {message} onChange = {handleChange} className = "border-2"/>
            <button className = "border-2">Submit</button>
        </form>
    )
}