import React, { useEffect, useState } from 'react';


export default function Splash() {
    const [imgNum, setImgNum] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setImgNum(prevNum => ++prevNum % 4)
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div id='splash-image-container'>
            {/* <img id='phone-image-1' className='phone-image' src={images[imgNum]} alt='' /> */}
            {/* <img id='hidden' className='phone-image' src={images[imgNum + 1]} alt='' /> */}
            {/* <img id={0 === imgNum && 'ease-in'} className='hidden' src='https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png' alt='' /> */}
            <img id={0 === imgNum ? 'ease-in' : 'ease-out'} className='phone-image hidden' src='https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png' alt='' />
            <img id={1 === imgNum ? 'ease-in' : 'ease-out'} className='phone-image hidden' src='https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png' alt='' />
            <img id={2 === imgNum ? 'ease-in' : 'ease-out'} className='phone-image hidden' src='https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png' alt='' />
            <img id={3 === imgNum ? 'ease-in' : 'ease-out'} className='phone-image hidden' src='https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png' alt='' />
        </div>
    )
}