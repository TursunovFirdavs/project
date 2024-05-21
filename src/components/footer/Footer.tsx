'use client'
import Link from 'next/link'
import { Button } from '../ui/button';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='bg-[#f5f6f9] pt-10 dark:bg-background 2xl:mb-0 mb-10'>
            <Button onClick={scrollToTop} className='w-full rounded-none flex items-center justify-center h-[50px] bg-[#4d5669] hover:bg-[#556077] text-white cursor-pointer transition'>
                Back to Top
            </Button>
            <div className='bg-[#394150]'>
                <div className='container py-12'>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                        <div>
                            <h3 className='text-lg font-bold mb-4 text-white'>Company Info</h3>
                            <ul className='text-sm'>
                                <li><Link href={'/'} className='hover:text-[#fcb700] text-[#ddd]'>About Us</Link></li>
                                <li><Link href={'/'} className='hover:text-[#fcb700] text-[#ddd]'>Careers</Link></li>
                                <li><Link href={'/'} className='hover:text-[#fcb700] text-[#ddd]'>Blog</Link></li>
                                <li><Link href={'/'} className='hover:text-[#fcb700] text-[#ddd]'>News</Link></li>
                                <li><Link href={'/'} className='hover:text-[#fcb700] text-[#ddd]'></Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-lg font-bold mb-4 text-white'>Let Us Help You</h3>
                            <ul className='text-sm'>
                                <li><Link href={'/'} className='hover:text-[#fcb700] text-[#ddd]'>Orders</Link></li>
                                <li><Link href={'/'} className='hover:text-[#fcb700] text-[#ddd]'>Downloads</Link></li>
                                <li><Link href={'/'} className='hover:text-[#fcb700] text-[#ddd]'>Addresses</Link></li>
                                <li><Link href={'/'} className='hover:text-[#fcb700] text-[#ddd]'>Account Details</Link></li>
                                <li><Link href={'/'} className='hover:text-[#fcb700] text-[#ddd]'>Lost Password</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-lg font-bold mb-4 text-white'>Quick Links</h3>
                            <ul className='text-sm'>
                                <li><Link href={'/'} className='hover:text-[#fcb700] text-[#ddd]'>Special Offers</Link></li>
                                <li><Link href={'/'} className='hover:text-[#fcb700] text-[#ddd]'>Gift Cards</Link></li>
                                <li><Link href={'/'} className='hover:text-[#fcb700] text-[#ddd]'>F21 Red</Link></li>
                                <li><Link href={'/'} className='hover:text-[#fcb700] text-[#ddd]'>Privacy Policy</Link></li>
                                <li><Link href={'/'} className='hover:text-[#fcb700] text-[#ddd]'>Terms of Use</Link></li>
                                <li><Link href={'/'} className='hover:text-[#fcb700] text-[#ddd]'>Portfolio</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-lg font-bold mb-4 text-white'>Company Info</h3>
                            <ul className='text-sm'>
                                <li><Link href={'/'} className='hover:text-[#fcb700] text-[#ddd]'>About Us</Link></li>
                                <li><Link href={'/'} className='hover:text-[#fcb700] text-[#ddd]'>Careers</Link></li>
                                <li><Link href={'/'} className='hover:text-[#fcb700] text-[#ddd]'>Blog</Link></li>
                                <li><Link href={'/'} className='hover:text-[#fcb700] text-[#ddd]'>News</Link></li>
                                <li><Link href={'/'} className='hover:text-[#fcb700] text-[#ddd]'></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" py-6 bg-[#202935]  text-white" >
                <div className="container block md:flex gap-4 items-center justify-between">
                    <p>Copyright © 2024</p>
                    <div className="flex gap-4 items-center">
                        <Link href={'/'}>Site Map</Link>
                        <Link href={'/'}>Search Terms</Link>
                        <Link href={'/'}>Advanced Search</Link>
                        <Link href={'/'}>Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer