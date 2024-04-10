import React, { useState, useEffect } from 'react';
import VideoList from '../Components/VideoList';
import VideoPlayer from '../Components/VideoPlayer';
import VideoDetails from '../Components/VideoDetails';
import Pagination from '../Components/Pagination';
import { Post } from '../interfaces';
import Navbar from '../Components/Navbar';

const Home: React.FC = () => {
    const [videos, setVideos] = useState<Post[]>([]);
    const [selectedVideo, setSelectedVideo] = useState<Post | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(() => {
        const storedPage = localStorage.getItem('currentPage');
        return storedPage ? parseInt(storedPage) : 1;
    });


    const totalPages = 9;

    const fetchVideos = async (page: number) => {
        try {
            const response = await fetch(`https://internship-service.onrender.com/videos?page=${page}`);
            const data = await response.json();
            setVideos(data.data.posts);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };
    console.log(selectedVideo);


    const handleVideoSelect = (video: Post | null) => {
        setSelectedVideo(video);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        fetchVideos(currentPage);
        localStorage.setItem('currentPage', currentPage.toString());
    }, [currentPage]);

    useEffect(() => {
        if (videos.length > 0) {
            setSelectedVideo(videos[0]);
        }
    }, [currentPage, videos]);

    return (
        <div className="flex justify-center bg-gray-100 min-h-screen bg-gray-900">
            <div className="container mx-auto pt-8">
                <div>
                    <Navbar />
                </div>
                <div className="m-6">
                    <Pagination
                        totalPages={totalPages}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
                    <div className="col-span-3">
                        <VideoPlayer video={selectedVideo} />
                        <VideoDetails video={selectedVideo} />
                    </div>
                    <div className="col-span-2">
                        <VideoList videos={videos} onVideoSelect={handleVideoSelect} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
