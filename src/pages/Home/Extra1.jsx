import React from 'react';
import extra1 from '../../assets/extra1.jpg'
import { motion } from "motion/react";
const Extra1 = () => {
    return (
        <div className='bg-slate-200 my-8 shadow-md flex items-center justify-evenly p-20'>

        <div>
            <motion.img 
            animate ={{y:[25,0,25]}}
                transition ={{
                    duration:5,
                    delay:1,
                    repeat:Infinity
                }}

            src={extra1} className='w-96 rounded' alt="Books" />
        </div>

        <div className='text-center space-y-16'>

        <section className='space-y-4'>
        <h1 className='font-bold text-4xl text-gray-700'>STAY WITH US</h1>
        <p>Subscribe to our newsletters now and stay up-to-date with new collections, <br /> the latest lookbooks and exclusive offers.</p>
        </section>

        <form className='flex relative items-center'>
            <input type="email" name="email" className='outline-none w-full border-0 border-b' placeholder='Enter your e-mail' />

            <input type="submit" value="SUBSCRIBE" className='font-bold cursor-pointer relative right-22 text-lg text-gray-700' />

        </form>

        </div>

        </div>
    );
};

export default Extra1;