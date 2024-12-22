import React from 'react'

function CardChild({img , title, description}) {
 
    
    
  return (
<div className='  h-full p-2
'>
    <div className=' flex items-start  flex-col shadow-2xl rounded-md  p-2 '>
        <img src={img} alt="" className='inline-block  max-h-72 w-full  sm:'  />
               <h1 className='font-bold text-xl text-orange-600'>{title}</h1>
        <p className='text-sm text-gray-500 py-2 hover:text-orange-300 '>{description}</p>
        <button className="inline-block rounded-sm   text-gray-300    bg-black   hover:text-orange-600 hover:scale-90 transition hover:border-orange-300 text-sm py-1 px-1">
        Read more
      </button>
</div>

        

    </div>




    
  )
}

export default CardChild
