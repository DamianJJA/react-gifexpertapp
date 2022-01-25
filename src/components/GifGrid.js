import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    //const [images, setImages] = useState([]);
    //const[count, setCount]  = useState(0); solo era un ejemplo

    const {data:images,loading} = useFetchGifs( category);


  return (
    <>
    <h3 className="animate__animated animate__fadeIn">{category}</h3>

    {loading && <p className="animate__animated animate__flash">Loading...</p>}

    <div className='card-grid'>

        {images.map( img => (
            <GifGridItem
                key={img.id} 
                {...img }/>
        ))
        }

    {/* <h3>{count}</h3>
    <button onClick={()=> setCount (count +1 )}></button> Solo ejemplo*/}

  </div>
    </>
  )
};