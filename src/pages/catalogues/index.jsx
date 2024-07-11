import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ArrowUpCircleFill } from "@styled-icons/bootstrap";
import * as Services from "../../service";
import * as Util from "../../utils";

import MarketPlace from "./marketPlace";
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

const api = Services.Method;

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
    const [events, setEvents] = useState([
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
    useEffect(() => {

    }, []);





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
                
                <div className="banner">
                    <img className="rounded-xl shadow" src={imgBanner} />
                </div>
                <Carousel images={events} interval={5000} />
                <div className="mt-3 mb-3">
                    <div className="font-bold text-center">Welcome to Vibrant Indonesia, where protection meets vitality!</div>
                    <div className="mt-3">We are a forward thinking community of insurance professionals and enthusiasts dedicated to revolutionizing the insurance landscape. We believe insurance isn't just about mitigating risk - it's about life's vibrancy and ensuring a secure future for all</div>
                    <div className="mt-3">Our mission is to redefine the insurance experience by fostering innovation, collaboration, and customer-centric solutions. We aim to create a vibrant ecosystem where insurance professionals, clients and industry experts come together to exchange ideas, drive positive change, and elevate the standards of excellence in the insurance sector.</div>
                    <div className="mt-3">Ready to be part of the future of insurance? <br />Become people of Vibrant and unlock opportunities for growth, collaboration and success in our vibrant community!</div>
                </div>

                <Carousel images={carousel01} interval={5000} />
                <div className="flex flex-col gap-2 mt-3">

                    <div className="flex justify-wrap items-center gap-3 p-1 border rounded-full shadow hover:cursor-pointer"
                        onClick={() => {
                            window.location.href = 'https://www.instagram.com/thevibrant.id/';
                        }}
                    >
                        <div className="w-[50%]">
                            <img src={instagram} className="w-10 ml-auto" />
                        </div>
                        <div className="w-[50%]">Instagram</div>
                    </div>
                    <div className="flex justify-wrap items-center gap-3 p-1 border rounded-full shadow hover:cursor-pointer" 
                        onClick={() => {
                            window.location.href = 'https://www.tiktok.com/@thevibrant.id?_t=8nqZdWTLRoW&_r=1';
                        }}
                    >
                        <div className="w-[50%]">
                            <img src={tiktok} className="w-10  ml-auto" />
                        </div>
                        <div className="w-[50%]">Tiktok</div>
                    </div>
                    <div className="flex justify-wrap items-center gap-3 p-1 border rounded-full shadow hover:cursor-pointer"
                        onClick={() => {
                            window.location.href = 'Https://www.youtube.com/@VibrantTalk';
                        }}
                    >
                        <div className="w-[50%]">
                            <img src={youtube} className="w-10  ml-auto" />
                        </div>

                        <div className="w-[50%]">Youtube</div>
                    </div>

                    

                    <div className="flex justify-wrap items-center gap-3 p-1 border rounded-full shadow mb-10 hover:cursor-pointer"
                        onClick={() => {
                            window.location.href = '/contact-us';
                        }}
                    >
                        <div className="w-[50%]">
                            <img src={whatsapp} className="w-10  ml-auto" />
                        </div>
                        <div className="w-[50%]">Whatsapp</div>
                    </div>
                </div>
            </div>



        </div>


    );


}



