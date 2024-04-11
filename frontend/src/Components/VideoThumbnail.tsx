import React from 'react';
import { Post } from '../interfaces';
import loader from "../assets/loader.gif"
import { AiFillLike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6";
import { MdOutlineSaveAlt } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

interface VideoThumbnailProps {
    post: Post;
    onVideoSelect: (post: Post) => void;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({ post, onVideoSelect }) => {

    const handleClick = () => {
        // window.scrollTo({ top: 0, behavior: 'smooth' });
        onVideoSelect(post);
    };
    console.log(post);

    if (!post) {
        return (
            <div className="video-player flex justify-center">
                <img src={loader} alt="" />
            </div>
        );
    }

    return (
        <div className="video-thumbnail border-2  border-blue-600 rounded-md overflow-hidden shadow-lg w-[380px] h-[550px] flex flex-col ml-2">
            <div className='flex'>
                <img src={post.submission.thumbnail} alt={post.submission.title} className="rounded-md h-[500px] hover:cursor-pointer" onClick={handleClick}/>
                <div className="flex justify-center items-center mt-4 flex-col gap-4 ">
                    <div className='flex flex-col gap-12 ml-5'>
                        <div>
                            <button className='flex gap-2 text-blue-600'><AiFillLike /></button>
                            <span className='text-white'>Like</span>
                        </div>
                        <div>
                            <button className='flex gap-2  text-blue-600'><FaCommentAlt /> </button>
                            <span className='text-white'>Comment</span>
                        </div>
                        <div>
                            <button className='flex gap-2 text-blue-600'><FaShareFromSquare /> </button>
                            <span className='text-white'>Share</span>
                        </div>
                        <div>
                            <button className='flex gap-2 text-blue-600'><MdOutlineSaveAlt /> </button>
                            <span className='text-white'>Save</span>
                        </div>
                        <div>
                            <button className='flex gap-2  text-blue-600'><BsThreeDotsVertical /> </button>
                            <span className='text-white'>More</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-2 bg-gray-900 text-white">
                <div className="flex items-center hover:cursor-pointer" onClick={handleClick}>
                    <img src={post.creator.pic} alt={post.creator.name} className="w-8 h-8 rounded-full mr-2 border-2 border-blue-500" />
                    <span className="text-white">{post.creator.name}</span>
                </div>
            </div>
        </div>



    );
};

export default VideoThumbnail;