import React, { useState, useEffect } from "react"
import Carousel from 'react-bootstrap/Carousel';
import './index.css'
import { getGeneralNews } from "../../APIs/getGeneralNews";
export default function GeneralNews() {
    const [news, setBusinessNews] = useState()
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    useEffect(() => {
        const getNews = async () => {
            const data = await getGeneralNews()
            console.log(data)
            setBusinessNews(data)
        }
        getNews()
    }, [])

    console.log(news)
    return (
        <Carousel>
            {news != null && news.length ? news.map((item, index) => (
                <Carousel.Item>
                    <div key={index} style={{maxHeight:'350px'}}>
                        <img
                            className="d-block"
                            src={item.urlToImage}
                            alt="First slide"
                            width={`100%`}
                        />
                        <Carousel.Caption>
                            <h3 style={{backgroundColor:'black'}}>{item.title}</h3>
                            <p style={{backgroundColor:'black'}}>{item.description}</p>
                            <a 
                                href={item.url} 
                                target='_blank'
                                style={{backgroundColor:'black',padding:`10px`}}
                                >
                                {item.url}
                                </a>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>

            )) : <span> Loading.... </span>}
        </Carousel>
    )

} 