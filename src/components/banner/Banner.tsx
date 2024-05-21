import React from 'react'

const Banner = ({data}:any) => {
    return (
        <>
            {data?.map((item: string, i:number) => (
                <div key={i} className="md:w-[473px] w-full relative banner mb-4 md:mb-0">
                    <img className="md:w-[473px] w-full" src={item} alt="" />
                    <div className="absolute horizantal top-0 left-[50%] translate-x-[-50%] w-0 bg-white/20 h-full transition-all duration-1000"></div>
                    <div className="absolute vertical top-[50%] left-0 translate-y-[-50%] w-full bg-white/20 h-0 transition-all duration-1000"></div>
                </div>
            ))}
        </>
    )
}

export default Banner