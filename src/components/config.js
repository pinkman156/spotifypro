export const authEndpoint = "https://accounts.spotify.com/authorize";

// Replace with your app's client ID, redirect URI and desired scopes
export const clientId = "10bfd12792394f2db9804268f92ea658";
export const redirectUri = "http://localhost:3000/redirect";
export const scopes = [
  "user-top-read",
  "user-read-currently-playing",
  "user-read-playback-state",
  "streaming",
  "user-read-email",
  "user-read-private",
  "user-modify-playback-state",
  "user-read-recently-played",
  "playlist-read",
  "playlist-read-private",
];
