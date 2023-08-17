import React from 'react';
import { restaurantList,IMG_CDN_URL } from '../../MockData/restaurantList';

const RestaurantCard = () => {
  return (
    <div className="w-[290px] relative py-6 mx-3">
        <h1 className='font-bold text-2xl'>Restaurants with online food delivery</h1>
      <div className="p-4 rounded-md hover:shadow-xl hover:border hover:border-gray-300">
     
        <img
          className="w-full h-[180px] object-cover rounded-md"
          src={IMG_CDN_URL+restaurantList[0].data?.cloudinaryImageId }
          alt={restaurantList[0].data?.name}
        />
        <h1 className="pt-2 font-semibold text-xl">{restaurantList[0].data?.name}</h1>
        <h6 className="font-normal text-gray-600 text-xs">
          {restaurantList[0].data?.cuisines?.join(", ")}
        </h6>
        <a
          className="mt-2 text-blue-500 hover:underline"
          href={restaurantList[0].data?.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Order Now
        </a>
      </div>
    </div>
  );
};



export default RestaurantCard;
