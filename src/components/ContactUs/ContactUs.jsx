import axios from 'axios'
import React, { useState } from 'react'

export default function ContactUs() {
    const [errorMsg, setErrorMsg] = useState(null)
    const [successMsgPhone, setSuccessMsgPhone] = useState(null)
    const [successMsgEmail, setSuccessMsgEmail] = useState(null)
    const [successName, setSuccessName] = useState(null)
    const [emptyPhone, setEmptyPhone] = useState(null)
    const [emptyEmail, setEmptyEmail] = useState(null)
    const [isLoad, setIsLoad] = useState(false)
    const [sentMessage, setSentMessage] = useState(null)
    

    //function to prevent form loading
function handleForm (e) {
e.preventDefault()
    }




 function validateEmail (email) {

        let regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        return regExp.test(email)


    }


    function validatePhoneNumber(phone) {
        let regExp = /^01[0125][0-9]{8}$/
        return regExp.test(phone)
    }




   

//function to display error and success message after validation




function validateData() {

//empty object to carry all errors came from inputs

let errors = {
       
}

    let phoneNumber = document.getElementById('phoneNumber')
    let email = document.getElementById('email')
    let name = document.getElementById('name')

    if(name.value.length ==1 ){

        errors.name ='enter a valid name'

    }
    else if(name.value.length ==0) {
        errors.name ='Name cannot be empty'
       

    }
    else {
    setSuccessName(true)        
    }
 
    
    email.addEventListener('input',()=>{        setEmptyEmail('empty')
    })

    phoneNumber.addEventListener('input', ()=>{
        setEmptyPhone('empty')
    })
    
    name.addEventListener('input',()=>{
        setEmptyEmail('inside')
        setEmptyPhone('inside')
    })

    

    if(validateEmail(email.value)) {
        setSuccessMsgEmail('success')

    }



    else if (email.value.length == 0) {
        errors.email = 'email cannot be empty'
        setSuccessMsgEmail(false)

    }

    else {
        errors.email = 'please enter a valid email'
        setSuccessMsgEmail(false)


    }
    
if(validatePhoneNumber(phoneNumber.value) ) {
setSuccessMsgPhone('success')


    }
        

else if (phoneNumber.value.length == 0) {

    errors.phone = 'phone cannot be empty'
    setSuccessMsgPhone(false)


 
    
}


 else   {
    errors.phone = 'please enter a valid egyptian number'
    setSuccessMsgPhone(false)

}


let sendBtn= document.getElementById('sendBtn')
if(validatePhoneNumber(phoneNumber.value) && validateEmail(email.value) ) {

   sendBtn.addEventListener('click',()=>{sendContactForm(email.value,phoneNumber.value,name.value)})
    errors.empty ='empty'
}
setErrorMsg(errors)




}


 function sendContactForm(email,phone,name) {
    setIsLoad(true)

    axios.post('https://upskilling-egypt.com:3001/contact',{
        
            "email": email,
            "phone": phone,
            "name" :name
        
    }).then((resp)=>{
        setIsLoad(false)
        setSentMessage(resp.data.message)
        setTimeout(() => {
            setSentMessage(null)
        }, 2000);
    }).catch((error)=>{
        setIsLoad(false)
    })

}

return <>
<section className='contact-us bg-white py-5 text-center' id='contact'>

<h2 className='lg:text-9xl md:text-7xl text-4xl font-extrabold text-MainColor uppercase'>Contact us</h2>
<div className="contact-us-form text-start md:w-[60%] mx-auto md:flex items-center md:gap-20 my-10">
    <form className='text-center lg:w-1/3' onSubmit={(e)=>{handleForm(e)}}>
        <div className="flex flex-col gap-4 w-3/4 mx-auto md:w-full ">

   
        <input id='name' onInput={validateData} type="text" placeholder='Full name' className= {successName  ? 'border-2 border-green-400 bg-[#FFD39F] py-3 rounded-full  placeholder-black px-3 font-bold text-sm outline-none' :' bg-[#FFD39F] py-3 rounded-full  placeholder-black px-3 font-bold text-sm'  } />


    {errorMsg?.name && errorMsg?.name?.length !=undefined  && emptyEmail == 'inside' && emptyPhone =='inside' ?         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
    <strong className="font-bold">{errorMsg?.name}</strong>
    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
    </span>
  </div>
 :''}









        <input onInput={validateData} type="email" id='email' placeholder='Email'className= {successMsgEmail == 'success' ? 'border-2 border-green-400 bg-[#FFD39F] py-3 rounded-full  placeholder-black px-3 font-bold text-sm outline-none' :' bg-[#FFD39F] py-3 rounded-full  placeholder-black px-3 font-bold text-sm'  }  />
        {
    errorMsg && errorMsg?.email?.length != undefined && emptyEmail  == 'empty' ?         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
    <strong className="font-bold">{errorMsg?.email}</strong>
    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
    </span>
  </div>  : ''
}
   
        <input   onInput={validateData} type="number" id='phoneNumber' placeholder='Phone Number' className= {successMsgPhone == 'success' ? 'border-2 border-green-400 bg-[#FFD39F] py-3 rounded-full  placeholder-black px-3 font-bold text-sm outline-none' :' bg-[#FFD39F] py-3 rounded-full  placeholder-black px-3 font-bold text-sm'  } />
{
    errorMsg?.phone  && errorMsg?.phone?.length != undefined   && emptyPhone  == 'empty'?         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
    <strong className="font-bold">{errorMsg?.phone}</strong>
    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
    </span>
  </div>  : ''
}
        
  
        

        </div>

    {sentMessage ?            <div className="sentSuccess my-3">
           <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
    <strong className="font-bold">{sentMessage}</strong>
    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
    </span>
  </div> 
    
           </div> : ''}
      
     {errorMsg?.empty?  <button   id='sendBtn' className='  border-[3px] rounded-full border-[#C98A40] px-10 font-bold uppercase text-sm py-2 my-3 ' >{isLoad ?        <i className="fa-solid fa-spinner fa-spin"></i> : 'send '}</button> :         <button disabled id='sendBtn'  className='  border-[3px] rounded-full border-[#C98A40] px-10 font-bold uppercase text-sm py-2 my-3 ' > send</button>
    }
    </form>
    <div className="upSkillingDetail w-1/2 mx-auto ">
        <div className="upper flex gap-3">
        <i className="fa-solid fa-envelope text-[#C98A40]"></i>
        <span>upskilling.eg1@gmail.com </span>
        </div>
        <div className="lower my-8 flex gap-3">
        <i className="fa-solid fa-phone text-[#C98A40]"></i>        
            <span>upskilling.eg1@gmail.com </span>
        </div>
    </div>
</div>
</section>


</>
}
