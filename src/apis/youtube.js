import axios from 'axios'
const KEY = 'AIzaSyAEHlZpzB_X6B_ygkx7HBGF6J0ke4YWRpQ';

export default axios.create({
   baseURL:'https://www.googleapis.com/youtube/v3',
   params:{
      part: 'snippet',
      type:[
         'video'
      ],
      maxResults: 5,
      key: KEY
   }
});