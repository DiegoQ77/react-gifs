import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  // Custom hooks
  const { data:images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeInLeft">{category}</h3>
      {loading && <p className="animate__animated animate__flash">Loanding</p>}
      <div className="card-grid">
        {
          images.map((img) => (
            <GifGridItem 
              key={img.id}
              { ...img }
            />
          ))
        }
     </div>
    </>

  )
}
