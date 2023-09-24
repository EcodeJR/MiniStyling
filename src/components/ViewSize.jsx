import { useState, useEffect } from "react";
import { CiMobile3 } from 'react-icons/ci'
import { BsTablet } from 'react-icons/bs'
import { BsLaptop } from 'react-icons/bs'


const ViewSize = () => {

    const [screen, setScreen] = useState(window.innerWidth);

    const handleScreenSize = () => {
        setScreen(window.innerWidth);
    }

    const [ScreenIcon, setScreenIcon] = useState(
            <BsLaptop />
    );

    const ScreenType = () => {
        if (window.innerWidth <= 568) {
            setScreenIcon(<CiMobile3 />)
        } else if (window.innerWidth <= 868) {
            setScreenIcon(<BsTablet />)
        } else {
            setScreenIcon(<BsLaptop />)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleScreenSize);
        
    }, [])
    useEffect(() => {
      window.addEventListener('resize', ScreenType);
    }, [])
    
    

    return ( <>
    
        <div className="w-screen h-[60vh] p-10 flex flex-col items-center justify-center">
            <h1 className="text-xl md:text-2xl font-bold text-gray-700">Screen Size: {screen}</h1>
            <div className="w-full flex flex-col items-center justify-center">
                <span className="text-xl md:text-2xl font-bold text-gray-700">Your on a: {ScreenIcon}</span>
            </div>
        </div>
    
    </> );
}
 
export default ViewSize;