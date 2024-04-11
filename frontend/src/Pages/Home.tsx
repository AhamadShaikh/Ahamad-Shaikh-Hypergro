import React, { useState, useEffect, useRef } from 'react';
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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    const totalPages = 9;

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const fetchVideos = async (page: number) => {
        try {
            const response = await fetch(`https://internship-service.onrender.com/videos?page=${page}`);
            const data = await response.json();
            setVideos(data.data.posts);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    const handleVideoSelect = (video: Post | null) => {
        setSelectedVideo(video);
        openModal();
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        fetchVideos(currentPage);
        localStorage.setItem('currentPage', currentPage.toString());
    }, [currentPage]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                closeModal();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="flex justify-center bg-gray-100 min-h-screen bg-gray-900">
            <div className="container mx-auto pt-8">
                <Navbar />
                <div className="mt-14">
                    {/* <Pagination
                        totalPages={totalPages}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    /> */}
                </div>
                <div className="">
                    <div className="mb-2">
                        <VideoList videos={videos} onVideoSelect={handleVideoSelect} />
                    </div>
                </div>
                <div className="m-6">
                    <Pagination
                        totalPages={totalPages}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center bg-black bg-opacity-70 backdrop-blur-sm mt-14">
                    <div ref={modalRef} className="bg-white p-4 rounded-lg w-[80%] max-h-2/3 overflow-y-auto">
                        <button className="absolute top-2 right-2 text-white" onClick={closeModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div>
                            <div>
                                <VideoPlayer video={selectedVideo} />
                            </div>
                            <div>
                                <VideoDetails video={selectedVideo} />
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </div>
    );
};

export default Home;
