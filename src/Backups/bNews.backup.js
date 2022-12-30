import React, { useState, useEffect } from "react"
import { getBusinessNews } from "../../APIs/getBusinessNews"
import Slider from "react-slick";
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
        <div>
            <Slider {...settings}>
                {news != null && news.length ? news.map((item, index) => (

                    <div key={index}>
                        <h1>{item.title}</h1>
                        <img
                            src={item.urlToImage} 
                            width={250}
                            height={250}
                        />
                        <p>
                        {item.description}
                        </p>
                        <a href={item.url}>Click here to read more....</a>
                    </div>

                ))

                    : <span> Loading.... </span>}
            </Slider>
        </div>
    )

} 