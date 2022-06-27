//*Swiper
import styles from './slider.module.scss';
import specialist1 from './../../assets/image/specialist1.png';
import specialist2 from './../../assets/image/specialist2.png';
import specialist3 from './../../assets/image/specialist3.png';
import specialist4 from './../../assets/image/specialist4.png';
import specialist5 from './../../assets/image/specialist5.png';
import specialist6 from './../../assets/image/specialist6.png';
import specialist7 from './../../assets/image/specialist7.png';
import specialist8 from './../../assets/image/specialist8.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Mousewheel } from 'swiper';
import 'swiper/scss/mousewheel';
import 'swiper/scss/keyboard';
import 'swiper/scss';

const Slider = () => {
  return (
    <>
      <Swiper
        modules={[Keyboard, Mousewheel]}
        spaceBetween={10}
        slidesPerView={5}
        keyboard={{ enablet: true }}
        mousewheel={{ sensitivity: 5 }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        <div className={styles.imageSlider}>
          <SwiperSlide className={styles.imageSliderImage}>
            <img src={specialist1} alt={'specialist1'} />
          </SwiperSlide>
          <SwiperSlide className={styles.imageSliderImage}>
            <img src={specialist2} alt={'specialist2'} />
          </SwiperSlide>
          <SwiperSlide className={styles.imageSliderImage}>
            <img src={specialist3} alt={'specialist3'} />
          </SwiperSlide>
          <SwiperSlide className={styles.imageSliderImage}>
            <img src={specialist4} alt={'specialist4'} />
          </SwiperSlide>
          <SwiperSlide className={styles.imageSliderImage}>
            <img src={specialist5} alt={'specialist5'} />
          </SwiperSlide>
          <SwiperSlide className={styles.imageSliderImage}>
            <img src={specialist6} alt={'specialist6'} />
          </SwiperSlide>
          <SwiperSlide className={styles.imageSliderImage}>
            <img src={specialist7} alt={'specialist7'} />
          </SwiperSlide>
          <SwiperSlide className={styles.imageSliderImage}>
            <img src={specialist8} alt={'specialist8'} />
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
};

export default Slider;
