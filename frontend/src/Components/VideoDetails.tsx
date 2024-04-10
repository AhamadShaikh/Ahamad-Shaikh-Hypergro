import React, { useState, useEffect } from 'react';
import { Post } from '../interfaces';
import { AiFillLike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";

interface VideoDetailsProps {
    video: Post | null;
}

const getLikes = (postId: string | undefined) => {
    if (!postId) return 0;
    const storedLikes = localStorage.getItem(`likes-${postId}`);
    return storedLikes ? parseInt(storedLikes) : 0;
};

const getComments = (postId: string | undefined) => {
    if (!postId) return [];
    const storedComments = localStorage.getItem(`comments-${postId}`);
    return storedComments ? JSON.parse(storedComments) : [];
};

const VideoDetails: React.FC<VideoDetailsProps> = ({ video }) => {
    if (!video) {
        return null;
    }

    const [likes, setLikes] = useState<number>(0);
    const [comments, setComments] = useState<string[]>([]);
    const [name, setName] = useState<string>('');
    const [commentText, setCommentText] = useState<string>('');
    const [showModal, setShowModal] = useState<boolean>(false);

    useEffect(() => {
        const storedLikes = getLikes(video.postId);
        const storedComments = getComments(video.postId);
        setLikes(storedLikes);
        setComments(storedComments);
    }, [video]);

    const handleLike = () => {
        const updatedLikes = likes + 1;
        setLikes(updatedLikes);
        localStorage.setItem(`likes-${video.postId}`, updatedLikes.toString());
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const submitComment = () => {
        if (name.trim() === '' || commentText.trim() === '') {
            alert('Please enter your name and comment text');
            return;
        }
        const newComment = `${name}: ${commentText}`;
        const updatedComments = [...comments, newComment];
        setComments(updatedComments);
        localStorage.setItem(`comments-${video.postId}`, JSON.stringify(updatedComments));
        closeModal();
    };

    return (
        <div>
            <div className="video-details p-4 border border-gray-300 rounded-md bg-blue-200">
                <div className="flex items-center mt-2 m-4">
                    <img src={video.creator.pic} alt={video.creator.name} className="w-8 h-8 rounded-full mr-2" />
                    <span className="text-gray-600 mr-4">{video.creator.name}</span>
                    <div className='flex gap-4 mt-2'>
                        <button onClick={handleLike} className='flex gap-2'><AiFillLike /> {likes}</button>
                        <button className='flex gap-2' onClick={openModal}><FaCommentAlt /> {comments.length}</button>
                    </div>
                </div>
                <h2 className="text-xl font-bold text-yellow-800 mb-2">{video.submission.title}</h2>
                <p className="text-gray-600">{video.submission.description}</p>
            </div>
            <div className='flex justify-between m-2'>
                <div style={{ color: 'blue', fontWeight: 'bold' }} className='mt-2'>
                    Comments
                </div>
                <div>
                    <button style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', borderRadius: '4px', border: 'none', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', transition: 'background-color 0.3s ease' }} onClick={openModal}>Add Comment</button>
                </div>

            </div>
            <div className="mt-4 video-thumbnail border border-gray-300 rounded-md p-3 cursor-pointer hover:shadow-lg bg-gradient-to-b from-blue-300 to-blue-100">
                {
                    comments.map((comment, index) => (
                        <div key={index} className="bg-gray-100 border border-gray-300 rounded-md p-4 shadow-md mb-4">
                            {comment}
                        </div>
                    ))
                }
            </div>
            {showModal && (
                <div className="modal" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="modal-content" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '400px' }}>
                        <span className="close" style={{ color: '#aaa', float: 'right', fontSize: '28px', cursor: 'pointer' }} onClick={closeModal}>&times;</span>
                        <input type="text" placeholder="Your name" style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '4px', border: '1px solid #ccc' }} value={name} onChange={(e) => setName(e.target.value)} />
                        <textarea placeholder="Enter your comment" style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '4px', border: '1px solid #ccc' }} value={commentText} onChange={(e) => setCommentText(e.target.value)} />
                        <button style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', borderRadius: '4px', border: 'none', cursor: 'pointer' }} onClick={submitComment}>Submit</button>
                    </div>
                </div>

            )}
        </div>
    );
};

export default VideoDetails;
