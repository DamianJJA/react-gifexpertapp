import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GitExpertApp = () => {

    //const categories = ['One punch','Samurai X', 'Dragon ball'];
    const [categories,setCategories] = useState(['One punch']); //Ejemplo original ['One punch','Samurai X', 'Dragon ball']

    // const handleAdd = () => {
    //     setCategories([...categories, 'HunterXHunter']);
    //     //Otra forma
    //     //setCategories(cats => [...cats, 'HunterXHunter']);
    // }



  return <>
      <h2>GitExpertApp</h2>
      <AddCategory setCategories={setCategories}></AddCategory>
      <hr></hr>

      

      <ol>
          {
              categories.map( category => (
                <GifGrid 
                    key={category}
                    category={category} />
              )  
              )
          }
      </ol>
  </>;
};
