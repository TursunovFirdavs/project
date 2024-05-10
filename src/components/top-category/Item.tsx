import React from 'react'

const Item = () => {
    const data = [
        'https://demo.lion-themes.net/amera/wp-content/uploads/2019/08/6.jpg',
        'https://demo.lion-themes.net/amera/wp-content/uploads/2019/08/9.jpg',
        'https://demo.lion-themes.net/amera/wp-content/uploads/2019/08/20.jpg',
        'https://demo.lion-themes.net/amera/wp-content/uploads/2019/08/13-1.jpg',
        'https://demo.lion-themes.net/amera/wp-content/uploads/2019/08/10.jpg',
        'https://demo.lion-themes.net/amera/wp-content/uploads/2019/08/30.jpg'
    ]
  return (
    <div className='flex flex-wrap justify-between gap-4'>
        {data?.map((item:string) => (
            <div className='w-[374px] bg-white rounded-sm flex items-center py-3.5 px-2.5' key={item}>
                <img className='w-[130px]' src={item} alt="" />
                <div>
                    <p className='text-[12px] text-secondary-dark'>Digital, Game & Toys, Women</p>
                    <p className='text-[14px] text-secondary-blue pt-1 pb-2.5'>Override The Digital Divide</p>
                    <p className='text-[18px] font-medium'>$3.00</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Item