import { useState, useEffect } from "react";
import Playlist from "./Playlist";
import Card from "./Card";
import Recent from "./Recent";
import Top from "./Top";
import Footer from "./Footer";

import "../styles/DashBoard.css";
var cors = require("cors");

export default function Dashboard(props) {
  const accessToken = props.token;

  const [id, setId] = useState("");
  const [curr, setCurr] = useState([]);
  const [load, setLoad] = useState(false);
  const [track, setTrack] = useState([]);

  useEffect(() => {
    if (curr.length > 0) setLoad(true);
  }, [curr]);

  return (
    <div className="container">
      <div className="stats">
        <Top accessToken={accessToken} />
        <Recent accessToken={accessToken} />
      </div>
      <div className="cards">
        <h1 style={{ position: "absolute", marginTop: "2%", fontSize: "20px" }}>
          select a mood
        </h1>
        <Card
          title="love is the way"
          class="love"
          token={accessToken}
          playlist={"0e4IFEEE1mQ3dNOycsKWyl"}
          set={setCurr}
          curr={curr}
          track={track}
        />
        <Card
          title="better times ahead"
          class="alt"
          token={accessToken}
          playlist={"3RsKnl2Is4ApYVRQjiNvyV"}
          set={setCurr}
          curr={curr}
          track={track}
        />
        <Card
          title="hip-hop hype"
          class="ren"
          token={accessToken}
          playlist={"55XrWIq3EbllhQagXGwIOq"}
          set={setCurr}
          curr={curr}
          track={track}
        />
      </div>
      {console.log(curr)}

      {load && (
        <div className="player" style={{ height: "20%", marginTop: "-2%" }}>
          <Playlist accessToken={accessToken} playlist={curr} set={setTrack} />
        </div>
      )}
      <Footer />
    </div>
  );
}
