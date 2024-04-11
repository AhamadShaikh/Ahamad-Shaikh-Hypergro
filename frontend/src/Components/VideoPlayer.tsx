import React from 'react';
import ReactPlayer from 'react-player';
import { Post } from '../interfaces';
// import loader from "../assets/loader.gif";

interface VideoPlayerProps {
    video: Post | null;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ video }) => {
    if (!video) {
        return (
            <div className="video-player flex justify-center">
                {/* <img src={loader} alt="Loading..." /> */}
            </div>
        );
    }

    return (
        <div className="video-player h-[450px] rounded-lg overflow-hidden shadow-lg bg-gray-900 hover:cursor-pointer mt-[150px]">
            <ReactPlayer
                url={video.submission.mediaUrl}
                controls
                width="100%"
                height="100%"
            />
        </div>
    );
};

export default VideoPlayer;
