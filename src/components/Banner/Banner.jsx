
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Marquee from 'react-fast-marquee';

const Banner = () => {
    return (
        <div>

        <div className='flex mb-[20px] pt-[5px] z-0'>
            <button className='btn btn-primary bg-[#78C1F3] text-black'>Contact Us</button>
            <Marquee pauseOnHover={true} speed={150}>
                <p className='text-red-500 mr-[50px]'>Mobile : 01877777777</p>
                <p className='text-red-500 mr-[50px]'>Mobile : 01988888888</p>
                <p className='text-red-500 mr-[50px]'>Mobile : 01766666666</p>
                <p className='text-red-500 mr-[50px]'>Email : Riz@gmail.com</p>
                <p className='text-red-500 mr-[50px]'>Facebook : Riz@gmail.com</p>
                <p className='text-red-500 mr-[50px]'>Address : Halishahar, Chittagong</p>
            </Marquee>
        </div>

        <Swiper
                style={{
                    "--swiper-pagination-color": "red",
                    "--swiper-navigation-color": "green",
                }}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"

            >

                <SwiperSlide><img className='h-[600px] w-full object-contain' src="https://i.ibb.co/K6t48Tx/image.png" alt="" /></SwiperSlide>

                <SwiperSlide><img className='h-[600px] w-full object-contain' src="https://i.ibb.co/kQMqH9C/image.png" alt="" /></SwiperSlide>

                
                <SwiperSlide><img className='h-[600px] w-full object-contain' src="https://i.ibb.co/ryV8BqT/image.png" alt="" /></SwiperSlide>

                <SwiperSlide><img className='h-[600px] w-full object-contain' src="https://i.ibb.co/zQQNVrW/image.png" alt="" /></SwiperSlide>

                <SwiperSlide><img className='h-[600px] w-full object-contain' src="https://i.ibb.co/5KLBZ6Y/image.png" alt="" /></SwiperSlide>

                <SwiperSlide><img className='h-[600px] w-full object-contain' src="https://i.ibb.co/wY4CpZ1/image.png" alt="" /></SwiperSlide>

               

               

            </Swiper>


       

           

    </div>
    );
};

export default Banner;