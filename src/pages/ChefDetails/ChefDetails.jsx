/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Recipes from '../../components/Recipes/Recipes';
import DetailsBanner from '../../components/DetailsBanner/DetailsBanner';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefDetails = () => {
    const chefDetails = useLoaderData();
    const [recipes, setRecipes] = useState(chefDetails);

    const {id} = useParams();
    
    

    return (
        <div>
            <DetailsBanner></DetailsBanner>
            <div className='mx-2 md:mx-[10%] my-[100px]'>
                <Recipes recipes={recipes}></Recipes>
            </div>
        </div>
    );
};

export default ChefDetails;