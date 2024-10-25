import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ContactUsBtn from '../ContactUsBtn/ContactUs';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

export default function Recipes() {

    const [allMeals, setAllMeals] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    function getAllBreakfastMeals() {
        setIsLoading(true)
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast').then((response)=>{
            setIsLoading(false)
            setAllMeals(response.data.meals)
        }).catch((error)=>{console.log('error');
            setIsLoading(false)
        })
    }

    useEffect(()=>{getAllBreakfastMeals()},[])

return <>

{isLoading ? <LoadingScreen/>
: <section className="recipes bg-white text-center py-6 ">
<h3 className='lg:text-9xl md:text-7xl font-extrabold text-MainColor uppercase '>Recipes</h3>

<div className="meals md:grid grid-cols-2 xl:flex w-[60%] mx-auto gap-3 text-start">
{allMeals?.map((meal)=>     <div key={meal.idMeal} className="meal border border-[#FFD8AB] rounded-lg  mx-auto my-6 ">
        <img src={meal.strMealThumb} alt="breakfast meal" className='w-full rounded-lg' />
       <div className="mealText p-5">
       <h6 className='text-[#C98A40] font-extrabold'>{meal.strMeal}</h6>
       <p className='my-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea est aut molestias optio esse nam sunt ducimus, consequuntur delectus commodi.</p>
       </div>
    </div>).slice(0,3)}


</div>

<ContactUsBtn/>
</section>}


</>
}
