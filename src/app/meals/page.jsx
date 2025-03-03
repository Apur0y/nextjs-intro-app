import React from 'react';
import MealSearchInput from './components/MealSearchInput';

const page = async({searchParams}) => {

    const query = await searchParams;
    
    const fetchMeals = async()=>{

        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`);
            const data = await res.json();
             return data.meals || [];
        } catch (error) {
            console.log(error);
            return []
        }
    }
    
    const meals = await fetchMeals();
    console.log("Meaklhe", meals);
    return (
        <div>
            <MealSearchInput></MealSearchInput>
         <div className='grid grid-cols-4 gap-5'>
            {
                meals.map(m=>(<div key={m.id} className='bg-stone-700'>
                    <img src={m.strMealThumb} alt="" />
                <h1 className='text-2xl'>{m.strMeal}</h1>
                <p>{m.strCategory}</p>
                <p>{m.strInstructions.split(" ").slice(0,9).join(" ")}...</p>
                </div>))
            }
         </div>
        </div>
    );
};

export default page;