/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ChefCard from './ChefCard/ChefCard';

const Chefs = () => {

        // chefs state
        const [chefs, setChefs] = useState();

        // load all chefs
        useEffect(()=>{
            const loadChef = async() => {                    
                try{
                    const response = await fetch('http://localhost:5000/chef/');
                    const data = await response.json();
                    setChefs(data);
                } catch(error) {
                    console.log(error);
                }
            }
            loadChef();
        },[])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {
                chefs?.map(chef => <ChefCard key={chef.chef_id} chef={chef}></ChefCard>)
            }
        </div>
    );
};

export default Chefs;