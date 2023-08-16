import React, { useCallback, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import './style.css'
import { datacontext } from './Ex_details'

const Youtube = () => {

    const [info, setinfo] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const {name,part} = useContext(datacontext)

    
    const fetchYoutubeData = async () => {

        const options = {
            method: 'GET',
            url: 'https://youtube-search-and-download.p.rapidapi.com/search',
            params: {
                query: `${name} videos`
            },
            headers: {
                'X-RapidAPI-Key': '3bbed43686msh130f12919ca1bbfp17189ejsn176809dad139',
                'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
            }
        };


        try {
            const response = await axios.request(options);
            console.log("videos fetched")
            console.log(response.data.contents);
            setinfo(response.data.contents)
            setIsLoading(false)

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {

        if(name!==undefined){
            fetchYoutubeData();
        }
        
    }, [name]);

    // useEffect(() => {

    //     const options = {
    //         method: 'GET',
    //         url: 'https://youtube-v31.p.rapidapi.com/search',
    //         params: {
    //             q: name,
    //             part: 'snippet,id',
    //             regionCode: 'US',
    //             maxResults: '50',
    //             order: 'date'
    //         },
    //         headers: {
    //             'X-RapidAPI-Key': '4c53314ac9msh90dbff18616c628p1da403jsn93f4e3e6bca7',
    //             'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    //         }
    //     };

    //     try {
    //         axios.request(options)
    //             .then((response) => {
    //                 console.log("dats is successful")
    //                 console.log(response.data.items)
    //                 setinfo(response.data.items)
    //             })
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }, [])



    return (
        <div className='video_gallery_container'>

            <div className='mt-4 flex left'><h3>Videos for - <span style={{ color: "rgb(79, 86, 183)"}}>{name}</span></h3></div>

            {!info ? (
                <p className='text-center'>Loading...</p>
            ) : (
                <div className='video_gallery'>
                    
                    {
                        info.slice(5,15).map((temp, index) => {

                        
                            return (

                                <div key={index} className='videos_desc'>
                                    <div>
                                        <a href={`https://www.youtube.com/watch?v=${temp.video.videoId}`} target="_main"><img src={temp.video.thumbnails[0].url} className='thumbnail_img' /></a>
                                    </div> 
                                    <div>
                                        <h6>{temp.video.title}</h6>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            )}
            <div className='d-flex justify-content-center'>
                <span><i class="bi bi-arrow-left display-5"></i></span>
                <span><i class="bi bi-arrow-right display-5"></i></span>
            </div>
            
        </div>
    )
}

export default Youtube;
