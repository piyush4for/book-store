import React from 'react'

const Spinner = () => {
  return (
    <>
       {/* <div className='animate-ping w-16 h-16 m-8 rounded-full bg-sky-600'></div> */}
       
       <div class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
    <div class="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-64 w-64"></div>
</div>
    </>
  )
}

export default Spinner