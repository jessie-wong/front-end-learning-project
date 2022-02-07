import React from 'react';
import AwesomeSwiper from 'react-awesome-swiper';
import data from '../data';
//this config is same as idangrous swiper
const config = {
    loop: true,
    autoHeight: true,
    direction: 'vertical',
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    // Disable preloading of all images
    preloadImages: false,
    // Enable lazy loading
    lazy: true,
    speed: 500,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        bulletElement: 'li',
        hideOnClick: true,
        clickable: true,
    },
    on: {
        slideChange: function () {
            console.log(this.activeIndex);
        },
    },
};
function Example(props) {
    const { columns, dataSource } = data || {};
   let swiperRef = null

    return (
        <div>
            <div className='table-header' style={{ display: 'flex' }}>
                {
                    columns.map(item => {
                        return <div style={{ width: '30%' }}>{item.title}</div>
                    })
                }
            </div>
            <AwesomeSwiper 
            ref={ref => (swiperRef = ref)} 
            config={config} 
            className="your-classname" 
            onMouseOver={() => { swiperRef.swiper.autoplay.stop(); console.log('ok'); }} 
            onMouseLeave={() => swiperRef.swiper.autoplay.start()}>
                <div className="swiper-wrapper">
                    <div className="swiper-slide">slider1</div>
                    <div className="swiper-slide">slider2</div>
                    <div className="swiper-slide">slider3</div>
                </div>
            </AwesomeSwiper>
        </div>
    )
}

export default Example;