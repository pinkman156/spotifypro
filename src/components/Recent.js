import React, { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import SpotifyPlayer from "react-spotify-web-playback";

import Player from "./Player";

const spotifyApi = new SpotifyWebApi({
  clientId: "10bfd12792394f2db9804268f92ea658",
});

export default function Recent(props) {
  const accessToken = props.accessToken;

  const [recent, setRecent] = useState([]);
  const [load, setLoad] = useState(false);
  //   const [tracks, setTracks] = useState([]);
  //   const [playingTrack, setPlayingTrack] = useState([]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    async function getTrack() {
      const res = await spotifyApi.getMyRecentlyPlayedTracks({ limit: 3 });
      setRecent(res.body);
      setLoad(true);
      console.log(recent);
      //   return <h1>{recent.items[0].track.name}</h1>;
    }

    if (accessToken) getTrack();
  }, [accessToken]);

  return (
    <div className="row">
      <div className="container">
        <div className="recent">
          <div className="text" style={{ marginTop: "-5%", color: "white" }}>
            <h1 style={{ fontSize: "50px" }}>Recently Played</h1>
          </div>
          {load && recent.items.length > 0 && (
            <ul>
              {recent.items.map((t) => (
                <li>
                  <img
                    src={t.track.album.images[0].url}
                    style={{
                      width: 250,
                      height: 260,
                      // float: "left",
                      marginRight: 30,
                    }}
                  />

                  {/* [0].track.album.images[0].url */}
                  <h3>{t.track.name}</h3>
                  <p>{t.track.artists[0].name}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
