import React from "react";
import { Carousel } from 'antd';

export default function ShopCarousel(props){
    return (
        <Carousel autoplay style={{paddingTop: '1.5rem', paddingBottom: '1.5rem'}} dots={false}>
          {
            props.carouselImages.map(function(item){
              return <div>
                <img src={item} alt="" className="car-img" />
              </div>
            })
          }
      </Carousel>
    );
}