import React from 'react'

const Filter = (props) => {
    let filterData = props.filterData;
  return (
    <div className='text-white flex flex-wrap max-w-max justify-center items-center text-lg space-x-4 gap-y-5 w-11/12 px-2 py-1 mx-auto'>
          {
              filterData.map((data) => (
                  <button className={`text-lg bg-black px-3 py-1 hover:bg-opacity-50 border-2 transition-all duration-300 text-white font-medium rounded-md`} key={data.id}>{data.title}</button>
              ))
          }
    </div>
  )
}

export default Filter
