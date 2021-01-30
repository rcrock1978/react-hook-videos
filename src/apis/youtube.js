import axios from "axios";

const KEY = "AIzaSyDthwLOhhTgIVIIFyp3Ff9w23wme80Gn8U";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
