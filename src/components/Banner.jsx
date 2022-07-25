import { useState, useContext, useEffect } from 'react';
import {
    BannerWrapper,
    BannerImage,
    BannerGrid,
    BannerPosterColumn,
    BannerPoster,
    BannerDetailColumn } from '../styled-components/banner';
import { Requests } from '../data/index';


const Banner = props => {
    const { requests, axios } = useContext(Requests);
    const [bannerData, setBannerData] = useState([]);

    useEffect(() => {
        let url = requests.random();
        axios.get(url).then(res => {
            setBannerData(res.data.results[Math.floor(Math.random() * res.data.results.length)]);
        })
    }, [requests, axios])

    console.log(bannerData)

    return (
        <BannerWrapper>
                <BannerImage src={requests.getImage(bannerData.backdrop_path)} alt={bannerData.name} />
            <BannerGrid>
                <BannerPosterColumn>
                    <BannerPoster src={`https://image.tmdb.org/t/p/w500/${bannerData.poster_path}`} alt={bannerData.name} />
                </BannerPosterColumn>
                <BannerDetailColumn>
                    <h1>{bannerData.name || bannerData.original_name || bannerData.original_title}</h1>
                    <p>{bannerData.overview}</p>
                </BannerDetailColumn>
            </BannerGrid>
        </BannerWrapper>
    )
}

export default Banner;