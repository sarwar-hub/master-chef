/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Recipes from '../../components/Recipes/Recipes';
import DetailsBanner from '../../components/DetailsBanner/DetailsBanner';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefDetails = () => {
    const chefDetails = useLoaderData();
    // recipe state
    const [recipes, setRecipes] = useState(chefDetails);

    const {id} = useParams();

    // chef state
    const [chef, setChef] = useState({});
    
    // load all chefs
    useEffect(()=>{
        const loadChef = async() => {  

            try{
                const response = await fetch('https://master-chef-server-sarwar-hub.vercel.app/chef');
                const chefs = await response.json();
                // find chef
                const currentChef = chefs.find(chef => chef.chef_id === parseInt(id));
                setChef(currentChef);

            } catch(error) {
                console.log(error);
            }
        }
        loadChef();
    },[id])
        

    return (
        <div>
            <DetailsBanner chef={chef}></DetailsBanner>
            <div className='mx-2 md:mx-[10%] my-[100px]'>
                <Recipes recipes={recipes}></Recipes>
            </div>
        </div>
    );
};

export default ChefDetails;