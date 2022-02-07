import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AutoPlayMethods(props) {
    let sliderRef = null;
    const play = () => {
        sliderRef.slickPlay();
    }
    const pause = () => {
        sliderRef.slickPause();
    }
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        vertical: true,
    };
    return (
        <div>
            <h2>Auto Play & Pause with buttons</h2>
            <Slider ref={slider => (sliderRef = slider)} {...settings} style={{overflow: 'scroll-y', height: 10}}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
            <div style={{ textAlign: "center" }}>
                <button className="button" onClick={() => play() }>
                    Play
                </button>
                <button className="button" onClick={() => pause() }>
                    Pause
                </button>
            </div>
        </div>
    );
}