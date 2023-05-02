/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Recipe = ({recipe}) => {
    const {recipe_id, image, name, ingredients, cooking_method, rating} = recipe;
    return (
        <div className="flex flex-col justify-center md:flex-row bg-base-100 shadow-xl rounded-xl">
            <figure className='md:w-[30%] object-cover rounded-xl'><img className='md:w-full md:h-full' src={image} alt=""/></figure>
            <div className="md:w-[70%] p-5 flex flex-col gap-7">
                <h2 className="card-title">{name}</h2>
                <div>
                    <p className='mb-5'><span className='font-bold'>Ingredients: </span>{ingredients}</p>
                    <p><span className='font-bold'>Cooking Method: </span>{cooking_method}</p>
                </div>
                <div className="flex justify-between items-center">
                    rating
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default Recipe;