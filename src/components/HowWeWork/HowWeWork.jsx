import React from 'react'
import { firstSection } from '../../main'
import bakery1 from '../../assets/images/bakery1.jpeg'
import bakery2 from '../../assets/images/bakery2.jpeg'
import bakery3 from '../../assets/images/bakery3.jpeg'
import bakery4 from '../../assets/images/bakery4.jpeg'
import ContactUsBtn from '../ContactUsBtn/ContactUs'
export default function HowWeWork() {
return <>
<section className="   flex items-center gap-12 my-7 lg:my-0">
  <div className="relative lg:w-3/4 xl:w-1/3 howWeWork bg-white  self-start mt-11 md:mt-5 pb-20">
  <img src={firstSection} alt=""  className='w-full opacity-35 ' />
    <div className="icons absolute top-0 lg:end-[250px] end-[100px] flex flex-col gap-4 mt-5 lg:text-2xl text-[#C98A40]">
    <i className="fa-brands fa-vk"></i>
    <i className="fa-brands fa-square-facebook "></i>
    <i className="fa-brands fa-instagram"></i>
    <i className="fa-brands fa-twitter"></i>
    </div>
    <p className='absolute lg:w-1/2 text-sm top-[40%]  text-[#C98A40] lg:top-1/2 end-5 font-bold  '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>

    <div className="floatedImgs absolute w-1/3 mt-5 flex lg:top-3/4 -bottom-5 start-0 lg:start-1/2 rounded-lg gap-5">
    <img src={bakery1} alt="bakery" className='w-full rounded-lg' />
    <img src={bakery2} alt="bakery" className='w-full rounded-lg ' />
    <img src={bakery3} alt="bakery" className='w-full rounded-lg' />
    <img src={bakery4} alt="bakery" className='w-full rounded-lg' />
    </div>
  </div>
  <div className="howText font-extrabold text-white uppercase  mb-20 text-end">
    <h2 className='lg:text-9xl md:text-7xl text-4xl  w-3/4'>How we work</h2>
  </div>
</section>
<div className="text-center mt-6">
<ContactUsBtn/>

</div>
</>
}
