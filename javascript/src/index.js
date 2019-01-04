import React from "react";
import ReactDOM from "react-dom";
import {PlayingFootball} from "./apps/PlayingFootball.js"

export function init(node){
    ReactDOM.render(<PlayingFootball />, node);
}