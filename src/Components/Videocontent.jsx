import React from 'react';
import Image from 'next/image';

const Videocontent = () => {
    return (
        <div className="overflow-hidden my-16 mx-4 md:mx-8 lg:mx-16">
            <Image
                src="/video image.png"
                alt="Video"
                className="w-full h-auto object-cover rounded-lg"
                priority
                width={1920} 
                height={1080}
            />
        </div>
    );
};

export default Videocontent;