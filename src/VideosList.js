import React from 'react';
import {VideoItem} from './VideoItem';

export const VideosList = ({ videos }) => {
    return (
        <>
           {videos.map(video=><VideoItem video={video}/>
           )}
           
        </>
    );
}
