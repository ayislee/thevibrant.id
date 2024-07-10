import React, { useEffect, useState } from "react";

import { Helmet } from "react-helmet-async";
import imgBanner from "../../asset/images/banner01.jpg"
import f1 from "../../asset/images/f1.png"
import f2 from "../../asset/images/f2.png"
import f3 from "../../asset/images/f3.png"
import e1 from "../../asset/images/e1.jpg"
import e2 from "../../asset/images/e2.jpg"
import e3 from "../../asset/images/e3.jpg"

import Carousel from "components/Carousel";
import instagram from "../../asset/logo/Instagram-1.png"
import tiktok from "../../asset/logo/Tik Tok-1.png"
import youtube from "../../asset/logo/Youtube-1.png"
import whatsapp from "../../asset/logo/Whatsapp-1.png"


export default function Catalogues() {

    const [carousel01, setCarousel01] = useState([
        {
            image: f1
        },
        {
            image: f2
        },
        {
            image: f3
        }
    ])
    const [events,setEvents] = useState([
        {
            image: e1
        },
        {
            image: e2
        },
        {
            image: e3
        }
    ])

    return (

        <div className='m-2'>
            <Helmet>
                <title>The Vibrant ID</title>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Cartz ID" />
                <meta name="robots" content="noindex, nofollow" />
                <meta property="og:type" content={window.location.origin} />
                <meta property="og:title" content="The Vibrant ID" />
                <meta property="og:description" content="Catalogue" />
                <meta property="og:url" content={window.location.href} />
            </Helmet>

            <div className=" mx-auto max-w-2xl pt-3">
                <div className="banner mt-2 hover:cursor-pointer"
                    onClick={() => {
                        window.location.href = 'https://wa.me/6281116781111';
                    }}
                >
                    <img className="rounded-xl shadow" src={f2} />
                </div>
                <div className="banner mt-2 hover:cursor-pointer"
                    onClick={() => {
                        window.location.href = 'https://wa.me/6283897803310';
                    }}
                >
                    <img className="rounded-xl shadow" src={f1} />
                </div>
                <div className="banner mt-2 hover:cursor-pointer"
                    onClick={() => {
                        window.location.href = 'https://wa.me/628176512062';
                    }}
                >
                    <img className="rounded-xl shadow" src={f3} />
                </div>
            </div>



        </div>


    );


}



