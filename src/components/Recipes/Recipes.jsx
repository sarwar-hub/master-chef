/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Recipe from './Recipe/Recipe';

const Recipes = ({recipes}) => {
    console.log(recipes);
    
    return (
        <>
        <h1 className='text-5xl md:text-7xl'>Recipes</h1>
        <hr className='my-7' />
        <div className='flex flex-col gap-[50px]'>
            {
                recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>)
            }
        </div>
        </>
    );
};

export default Recipes;