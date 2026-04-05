import React from 'react';

const HeroContent = () => {
    return (
        <div className='max-w-5xl text-center mt-52 mx-auto w-full'>
            <h2 className='text-5xl text-[#E0E3E5]'>Master Focus & Get <br />
                More Done in Less Times</h2>

            <p className='text-[#AAAEB2]'>A step-by-step system to eliminate procrastination, train your <br /> brain for deep work, and boost productivity effortlessly</p>

            <div className='mt-8'>
                <button className='btn-primary mr-1.5'>Enroll now</button>
                <button className='py-[10px] px-5 border rounded-sm ml-1.5'>Curriculum</button>
            </div>
        </div>
    );
};

export default HeroContent;