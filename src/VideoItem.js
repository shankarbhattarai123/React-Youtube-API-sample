import React from 'react'

export const VideoItem = ({ video }) => {
    console.log(video);
    return (
        <>
            <div className="container">
                <div className="col-6">
                </div>
                <div className="card">
                    <img src={video.snippet.thumbnails.medium.url} alt="" height="300" width="350" />
                    <div className="card-body">
                        <p className="card-text"> {video.snippet.title}</p>
                    </div>
                </div>

            </div>


        </>
    );
}
