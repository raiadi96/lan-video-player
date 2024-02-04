// src/components/VideoList.js
import React from 'react';
import { Link } from 'react-router-dom';

const VideoList = ({ videos }) => {
    return (
        <div>
            <h2> Video List </h2>
            <ul>
                {/* {videos.map((video) =>{
                    <li key={video.id}>
                        <Link to={`/player/${video.src}`}>{video.name}</Link>
                    </li>
                })} */}
            </ul>
        </div>
    )
}

export default VideoList;
