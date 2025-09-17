import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./PhotoFeed.css";
import { FaHeart, FaRegCopy, FaSave, FaUserCircle } from "react-icons/fa";

const photos = [
  "https://picsum.photos/id/1018/800/1400",
  "https://picsum.photos/id/1015/800/1400",
  "https://picsum.photos/id/1016/800/1400",
  "https://picsum.photos/id/1021/800/1400",
  "https://picsum.photos/id/1024/800/1400",
];

function PhotoFeed() {
  return (
    <div className="feed-container">
      {/* Swiper */}
      <div className="swiper-wrapper">
        <Swiper
          direction="vertical"
          slidesPerView={1}
          spaceBetween={0}
        >
          {photos.map((url, index) => (
            <SwiperSlide key={index}>
              <div className="photo">
                <img src={url} alt={`photo-${index}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button><FaHeart /></button>
          <button><FaRegCopy /></button>
          <button><FaSave /></button>
          <button><FaUserCircle /></button>
        </div>
      </div>
    </div>
  );
}

export default PhotoFeed;
