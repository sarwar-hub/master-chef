/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Rating from 'react-rating';
import { toast } from 'react-toastify';
import { FaStar, FaRegStar } from "react-icons/fa";


const Recipe = ({recipe}) => {

    // button state
    const [disable, setDisable] = useState(false);

    const handleFav = () => {
        toast.success('Added to Favorite ✔', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        setDisable(!disable);
    }

    const {recipe_id, image, name, ingredients, cooking_method, rating} = recipe;
    return (
        <div className="flex flex-col justify-center md:flex-row bg-base-100 shadow-xl rounded-xl">
            <figure className='md:w-[30%] object-cover rounded-xl'><img className='md:w-full md:h-full' src={image} alt=""/></figure>
            <div className="md:w-[70%] p-5 flex flex-col gap-7">
                <h2 className="card-title">{name}</h2>
                <div>
                    <p className='mb-5'><span className='font-bold'>Ingredients: </span>{ingredients.map(i=><span key={i.index}>{i+', '}</span>)}</p>
                    <p><span className='font-bold'>Cooking Method: </span>{cooking_method}</p>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <Rating
                            readonly
                            placeholderRating={rating}
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar className='text-warning'></FaStar>}
                        /> {rating}
                    </div>
                    <button disabled={disable} onClick={handleFav} className={`btn btn-primary`}>Add to favorite</button>
                </div>
            </div>
        </div>
    );
};

export default Recipe;