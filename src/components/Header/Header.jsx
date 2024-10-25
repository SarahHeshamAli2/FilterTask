import React from 'react'
import bread from '../../assets/images/bread.png'
import HowWeWork from '../HowWeWork/HowWeWork'
import { firstSection } from '../../main'
import AboutUs from '../AboutUs/AboutUs'
import Recipes from '../Recipes/Recipes'
import TestyMonials from '../TestyMonials/TestyMonials'
import ContactUs from '../ContactUs/ContactUs'
import ScrollToTopButton from '../BackToTopBtn/BackToTop'


export default function Header() {
return <>
<section className='tasty-section  flex justify-between items-start'>
<div className="left-part myContainer lg:w-3/4 text-white text-center py-5 ">

    <div className="middle-section h-[400px] flex flex-col items-center justify-between">
 
    <div className="headLine text-2xl lg:w-1/2 mx-auto  text-start uppercase">
    <h3 >Peachy Pup </h3>
    <h3 >Bakery </h3>
    </div>
        <div className="heroSection lg:mt-0 mt-[6rem] py-10">
            <h1 className=' md:text-6xl text-3xl font-extrabold uppercase'>Tasty pastries</h1>
       <div className="lg:w-[50%] w-[90%] mx-auto  text-start">
       <p className='my-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
       <button className='bg-[#FDBA10] rounded-full py-2 px-7 font-bold self-start'>see more </button></div>
        </div>

      
    </div>
</div>

<section className="white-section bg-white md:w-1/3 relative w-3/4 ">
<img src={firstSection} alt="bakeries" className='w-full opacity-35' />
<div className="breadImg  ">
    <img src={bread} alt="bread" className='w-full absolute md:bottom-1/2 translate-y-1/2 md:end-[40%] bottom-[70%] end-[30%]' />
</div>
</section>

</section>
<HowWeWork/>
<AboutUs/>
<Recipes/>
<TestyMonials/>

<ContactUs/>
<ScrollToTopButton/>
</>
}
