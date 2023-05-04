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
                    const response = await fetch('https://master-chef-server-sarwar-hub.vercel.app/chef/');
                    const data = await response.json();
                    setChefs(data);
                } catch(error) {
                    console.log(error);
                }
            }
            loadChef();
        },[])

    return (
        <>
        <h1 className='text-5xl md:text-7xl'>Our Masters</h1>
        <hr className='my-8' />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            
            {
                chefs?.map(chef => <ChefCard key={chef.chef_id} chef={chef}></ChefCard>)
            }
        </div>
        </>
    );
};

export default Chefs;