import axios from 'axios';

const KEY = 'AIzaSyDfhY-tmn7Q4NH-31jMaaWqOCegDG_uRBQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    type: 'video',
  },
});
