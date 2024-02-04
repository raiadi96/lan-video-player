import React from "react";
import VideoList from "./VideoList";

const Home = () => {
    const videos = [
        {id:1, name: 'Video 1', src: 'https://www.youtube.com/watch?v=iu-LBY7NXD4' },
        { id:2, name: 'Video 2', src: 'https://www.youtube.com/watch?v=S5HHOjOmWag' }
    ]


return (
    <div>
        <h1>
            LAN Video player
        </h1>
        <VideoList videos= {videos} />
    </div>
)
};

export default Home;