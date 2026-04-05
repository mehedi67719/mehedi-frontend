import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className='relative'>
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-to-via-blue-300   blue-[#2466F2] via-blue-300 to-transparent"></div>
            <div className='mx-10 flex items-center pt-8 pb-15 justify-between'>
                <p>© Copyright 2024, All Rights Reserved</p>
                <div className='flex items-center'>
                    <Link href="/">Terms & conditions</Link>
                    <Link href="/">Refund policy</Link>
                    <Link href="/">Pricing</Link>
                    <Link href="/">Support</Link>
                </div>

            </div>
        </div>

    );
};

export default Footer;