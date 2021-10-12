import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {

  //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState(['Caballeros del Zodiaco']);

  return (
    <div>
      <h2>GiftExpertApp</h2>

      <AddCategory setCategories={setCategories} />
      <hr></hr>

      <ol>
        {
          categories.map((category, index) =>  
            <GifGrid
              key={category} 
              index={index+1}
              category={category} 
            />
          )
        }
      </ol>
    </div>
  )
}
