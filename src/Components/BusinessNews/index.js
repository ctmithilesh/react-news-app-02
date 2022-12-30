import React, { useState, useEffect } from "react"
import { getBusinessNews } from "../../APIs/getBusinessNews"
import Carousel from 'react-bootstrap/Carousel';
export default function BusinessNews() {
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
            const data = await getBusinessNews()
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
                    <div key={index}>
                        <img
                            className="d-block"
                            src={item.urlToImage}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 style={{backgroundColor:'black'}}>{item.title}</h3>
                            <p style={{backgroundColor:'black'}}>{item.description}</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>

            )) : <span> Loading.... </span>}
        </Carousel>
    )

} 