import axios from "axios";
import React, { useEffect, useState } from "react";


const useGif = (tag) => {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);

    const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=t1O1o3aDEFxkMAanD3EGHGGY5AgvjTb7`;
    const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=t1O1o3aDEFxkMAanD3EGHGGY5AgvjTb7&tag=${tag}`;

    async function fetchData(tag) {
        setLoading(true);
        const {data} = await axios.get(tag ? tagUrl : randomUrl);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource)
        setLoading(false);
    }
    useEffect( () => {
        fetchData();
    },[] )

    return {gif, loading, fetchData};


}

export default useGif;