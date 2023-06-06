import './Styles/App/app.css'
import { Swiper,SwiperSlide } from 'swiper/react';
import SaveData from './Pages/SaveData';
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useSelector } from 'react-redux';
import Nav from './Components/Nav';
import {useState,useEffect} from 'react'
import Home from './Pages/Home';
import Converting from './Pages/Converting';
import InternetTest from './Pages/InternetTest';

export default function App() {
  // Redux
  let value = useSelector((state:any)=>state.changeValue)

  // State For Changing Swiper Page
  let [swiper,setSwiper] = useState<any>(null)

  // Change Swiper Page
useEffect(()=>{
  if(swiper){
    swiper.slideTo(value)
  }
},[value])

  return (
    <div className="App">
      <Nav />
      <Swiper
      initialSlide={value}
      onSwiper={setSwiper}
      spaceBetween={0}
      slidesPerView={1}
      >
        <SwiperSlide><InternetTest /></SwiperSlide>
        <SwiperSlide><Home /></SwiperSlide>
        <SwiperSlide><SaveData /></SwiperSlide>
        <SwiperSlide><Converting /></SwiperSlide>
      </Swiper>
    </div>
  );
}
