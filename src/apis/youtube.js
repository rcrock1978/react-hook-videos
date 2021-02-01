import axios from "axios";

const KEY = "AIzaSyAeOxpoYswmoyQMF6Ty87RU3ueWTrMXsRQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
