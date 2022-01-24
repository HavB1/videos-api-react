import React from "react";
import { renderIntoDocument } from "react-dom/cjs/react-dom-test-utils.development";
import VideoItem from "./VideoItem";

const VideoList = ({videos})=>{
   const renderedList = videos.map((video)=>{
      return <VideoItem video ={video}/>
   })
   return <div className="ui relaxed divided list">{renderedList}</div>
}

export default VideoList;