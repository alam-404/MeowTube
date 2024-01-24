import React from 'react';

const VideoCard = (props) => {
    const video = props.video;
    return (
        <div>
            <div className="bg-gray-800 rounded-lg p-4 h-full">
                <div className='w-full h-[200px] overflow-hidden flex items-center justify-center  rounded-lg'>
                    <img src={video.thumbnailUrl} className="  object-cover" />
                </div>
                <h1>{video.title}</h1>
            </div>
        </div>
    );
};

export default VideoCard;