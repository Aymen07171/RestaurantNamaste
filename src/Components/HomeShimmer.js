import React from 'react'
import { shimmer_display_count } from '../Helpers/Constant'

const HomeShimmer = () => {
    const shimArr = Array(shimmer_display_count).fill("");
    console.log(shimArr);
    return (
    <div className='max-w-[80%] mx-auto min-h-screen pt-24'>
        <div className='mt-8 ml-4 pl-2 max-w-[40%] bg-[#eef0f5] h-5' />
        <div className='flex p-4 overflow-hidden'>
        {shimArr.map((e, i) => {
            return <div className='h-[180px] min-w-[144px] bg-[#eef0f5] mr-8' key={i} />
        })}
        </div>
        <div className='mt-8 ml-4 pl-2 max-w-[40%] bg-[#eef0f5] h-5' />
        <div className='flex mt-8 ml-4 pl-2 overflow-hidden min-h-[240px]'>
        {shimArr.map((e, i) => {
            return <div className='h-[160px] min-w-[256px] rounded-3xl bg-[#eef0f5] mr-8' key={i} />
        })}
        </div>
        <div className='mt-8 ml-4 pl-2 max-w-[40%] bg-[#eef0f5] h-5' />
        <div className='flex flex-wrap mt-8 ml-4 gap-y-8 pl-2 overflow-hidden min-h-[240px]'>
        {shimArr.map((e, i) => {
            return <div className='h-[160px] min-w-[256px] rounded-3xl bg-[#eef0f5] mr-8' key={i} />
        })}
        </div>
    </div>
  )
}

export default HomeShimmer;