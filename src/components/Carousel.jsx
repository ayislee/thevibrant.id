import React, {useState, useEffect, useRef} from 'react'
// import { banners as banner } from '../../jsons/banners'




let count = 0
function Carousel(prop) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const sliderRef = useRef()
    const [banners, setBanners] = useState(prop.images)
    let interval


    
    useEffect(()=> {
        console.log('b',banners.images)
        if(banners.length > 0) {
            console.log(banners.length)
            interval = setInterval(()=>{
                handleNextButton()
            },prop.interval)
    
            sliderRef.current.addEventListener('animationend',removeAnimation)
            return () => clearInterval(interval)
        }
        
    },[banners])

    
    
    const removeAnimation = () => {
        sliderRef.current.classList.remove('fade-anim')
    }

    const startSlider = () => {
        let interval = setInterval(()=>{
            handleNextButton()
        },3000)

        sliderRef.current.addEventListener('animationend',removeAnimation)
        return () => clearInterval(interval)
    }

    const handlePrevButton = () => {
        
        count = (currentIndex + banners.length - 1) % banners.length
        setCurrentIndex(count)
        sliderRef.current.classList.add('fade-anim')
    }

    const handleNextButton = () => {
        count = (count + 1) % banners.length
        setCurrentIndex(count) 
        sliderRef.current.classList.add('fade-anim')
    }

    return (
        <div className='p-1'>
            <div ref={sliderRef} className="w-full select-none relative">
                <div className="aspect-w-16 aspect-h-9">
                    {/* <a href={banners[currentIndex]?.link}> */}
                    <img src={banners[currentIndex]?.image} className="w-full rounded-xl shadow" />    
                    {/* </a> */}
                    
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <button className="btn btn-circle" onClick={handlePrevButton}>❮</button>
                        <button className="btn btn-circle" onClick={handleNextButton}>❯</button>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Carousel