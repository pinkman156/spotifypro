import { React } from "react";
import "../styles/card.css";
import Playlist from "./Playlist";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className={props.class}>
      <button
        onClick={(e) => {
          e.preventDefault();

          props.set(props.playlist);
        }}
      >
        {props.title}
      </button>
    </div>
  );
}
