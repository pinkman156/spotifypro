import React, { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import Player from "./Player";

const spotifyApi = new SpotifyWebApi({
  clientId: "10bfd12792394f2db9804268f92ea658",
});

export default function Top(props) {
  const accessToken = props.accessToken;

  const [top, setTop] = useState([]);
  const [load, setLoad] = useState(false);
  //   const [tracks, setTracks] = useState([]);
  //   const [playingTrack, setPlayingTrack] = useState([]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    async function getTrack() {
      const res = await spotifyApi.getMyTopArtists({
        limit: 3,
        time_range: "medium_term",
      });
      setTop(res.body.items);
      setLoad(true);
      console.log(top);
      //   return <h1>{top.items[0].track.name}</h1>;
    }

    if (accessToken) getTrack();
  }, [accessToken]);

  return (
    <div className="row">
      <div className="container">
        <div className="top">
          <div className="text" style={{ marginTop: "-5%", color: "white" }}>
            <h1 style={{ fontSize: "50px" }}>Your Top Artists</h1>
          </div>
          {load && top.length > 0 && (
            <ul>
              {top.map((t) => (
                <li>
                  <img
                    src={t.images[0].url}
                    style={{
                      width: 250,
                      height: 260,

                      marginRight: 30,
                    }}
                  />
                  <h4>{t.name}</h4>
                  {/* <p>{t.artists[0].name}</p> */}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
