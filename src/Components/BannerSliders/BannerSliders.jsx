import { useEffect, useState } from 'react';
import one from '../../Assets/1.webp';
import two from '../../Assets/2.webp';
import three from '../../Assets/3.webp';
import four from '../../Assets/4.webp';
import five from '../../Assets/5.webp';
const BannerSliders = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const interval = setInterval(() => {
      slides.forEach((slide, index) => {
        slide.classList.remove('opacity-100');
        if (index === current) {
          slide.classList.add('opacity-100');
          setCurrent((current + 1) % slides.length);
        }
      });
      dots.forEach((dot, index) => {
        dot.classList.remove('w-[3rem]');
        if (index === current) {
          dot.classList.add('w-[3rem]');
        }
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [current]);
  return (
    <div className='relative h-[160px] sm:h-[200px] md:h-[270px] lg:h-[330px] xl:h-[500px]'>
      <div className='relative h-full'>
        <img
          src={one}
          className='slide absolute w-full opacity-100 transition-all duration-500'
        />
        <img
          src={two}
          className='slide absolute w-full opacity-0 transition-all duration-500'
        />
        <img
          src={three}
          className='slide absolute w-full opacity-0 transition-all duration-500'
        />
        <img
          src={four}
          className='slide absolute w-full opacity-0 transition-all duration-500'
        />
        <img
          src={five}
          className='slide absolute w-full opacity-0 transition-all duration-500'
        />
        <div className='absolute left-1/2 top-1/2 z-50 flex h-full -translate-x-1/2 -translate-y-1/2 items-end gap-5'>
          <span className='dot block h-6 w-6 rounded-full bg-apple-500 transition-all'></span>
          <span className='dot block h-6 w-6 rounded-full bg-apple-500 transition-all'></span>
          <span className='dot block h-6 w-6 rounded-full bg-apple-500 transition-all'></span>
          <span className='dot block h-6 w-6 rounded-full bg-apple-500 transition-all'></span>
          <span className='dot block h-6 w-6 rounded-full bg-apple-500 transition-all'></span>
        </div>
      </div>
    </div>
  );
};

export default BannerSliders;
