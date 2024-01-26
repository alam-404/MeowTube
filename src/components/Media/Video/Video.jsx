import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const Video = () => {
    const { videoID } = useParams();
    const videoData = JSON.parse(useLoaderData());
    const video = videoData.find(video => video.id == videoID)
    return (
        <div>
            <div className='flex justify-center'>
                <video controls className='w-4/5 h-1/2 object-fill rounded-md border-2'>
                    <source src={video.videoUrl} type='video/mp4' />
                </video>
            </div>
            <div className='my-5 flex justify-center'>
                <div className='w-4/5'>
                    <div className='mb-3'>
                        <p className='font-bold'>{video.title}</p>
                    </div>
                    {/* Author */}
                    <div className='flex gap-2 items-center text-sm'>
                        <Link to={`/discover`}>
                            <img src='https://placekitten.com/100/100' className='w-8 h-8 rounded-full' />
                        </Link>
                        <div>
                            <p className='font-medium text-gray-300'>
                                <Link to={`/discover`}>{video.author}</Link>
                            </p>
                            <div className='text-xs flex gap-2 items-center justify-start text-gray-400'>
                                <p>{video.views}</p>
                                <p>&#8226;</p>
                                <p>{video.uploadTime}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;