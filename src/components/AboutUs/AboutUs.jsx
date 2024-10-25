import React from 'react'
import chef from '../../assets/images/chef.jpeg'
import ContactUsBtn from '../ContactUsBtn/ContactUs'

export default function AboutUs() {
return <>
<section className='aboutUs md:flex justify-between mt-20 '>
    <div className="leftPart text-white myContainer py-5">
      <div className="wrapped  md:w-1/2  w-[90%] mx-auto">
      <h3 className='lg:text-9xl text-4xl  font-extrabold'>About us</h3>
        <p className='my-5 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <ContactUsBtn/>
      </div>

    </div>
    <div className="rightPart bg-white relative lg:w-[40%]   rounded-xl md:rounded-none md:w-3/4 ">
        <img src={chef} alt="chef" className=' rounded-md md:absolute  w-full md:top-10 top-[150px] md:start-[-50px] -start-7 ' />
    </div>
</section>

</>
}
