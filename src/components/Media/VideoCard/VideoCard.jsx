import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = (props) => {
    const video = props.video;
    return (
        <div>
            <Link to={`/video/${video.id}`}>
                <div className="bg-gray-800 rounded-lg p-4 h-full">
                    {/* Thumbnail */}
                    <div className='w-full h-[200px] overflow-hidden flex items-center justify-center  rounded-lg'>

                        <img src={video.thumbnailUrl} className="  object-cover" />
                    </div>
                    {/* Title */}
                    <div className='my-3'>
                        <h1 className='font-semibold'>
                            {video.title}
                        </h1>
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
            </Link>
        </div>
    );
};

export default VideoCard;