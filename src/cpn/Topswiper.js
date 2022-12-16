import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Topswiper = () => {
  const swiperinfo = [{
    ptftitle : '리액트 광고 웹/앱',
    ptfperiod : '3주',
    ptflink : '#none',
    co : '단독작업',
    app : ['illust', 'photoshop', 'vscode'],
    classname : 'react',
  },
  {
    ptftitle : '부트스트랩 퍼블리싱',
    ptfperiod : '3일',
    ptflink : '#none',
    co : '단독작업',
    app : ['vscode'],
    classname : 'boot',
  },
  {
    ptftitle : 'CMS 그누보드 쇼핑몰',
    ptfperiod : '4주',
    ptflink : '#none',
    co : '단독작업',
    app : ['illust', 'photoshop', 'vscode'],
    classname : 'sir',
  }];
    return(
      <Swiper className='topSwiper'
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1.5}
      loop={true}
      navigation
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      >
      {swiperinfo.map((item, index) => {
          return(
            <SwiperSlide className={item.classname}><a href={item.ptflink}>{item.ptftitle}</a></SwiperSlide>
          )
        })
      }
      </Swiper>
    );
}

export default Topswiper;