// components/VideoList.tsx
import React from 'react';
import VideoThumbnail from './VideoThumbnail';
import { Post } from '../interfaces';

interface VideoListProps {
  videos: Post[];
  onVideoSelect: (post: Post) => void;
}

const VideoList: React.FC<VideoListProps> = ({ videos, onVideoSelect }) => {
  return (
    <div className="video-list grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 items-center justify-center">
      {videos.map(video => (
        <VideoThumbnail key={video.postId} post={video} onVideoSelect={onVideoSelect} />
      ))}
    </div>
  );
};

export default VideoList;
