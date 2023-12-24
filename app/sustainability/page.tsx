import React from 'react'
import Multimeter from '../public/multimeter.jpg'
import Icon from '../public/icon.png'
import Watch from '../public/watch.jpg'

const services = () => {
    return (
        <div className='bg-black'>
            <div className="relative">
                <img src={Multimeter.src} alt="Image" className="object-cover m-0 flex h-full w-full object-fit-cover brightness-50" />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white">
                    <p className="text-6xl font-bold ">
                        SUSTAINABILITY
                    </p>
                </div>
                <div className="absolute bottom-1/3 left-0 right-0 transform translate-y-1/2 text-center text-white">
                    <p className="text-xl uppercase font-bold">
                        OUR EFFORTS
                    </p>
                </div>
            </div>

            <div className="pt-20 m-12 bg-black">
                <h1 className="text-4xl font-bold uppercase text-orange-500 py-3 text-center justify-center"> OUR STORY</h1>
                <p className="text-lg font-light text-white text-justify m-12">
                    Established in 2023 by a passionate group of friends, Bitscraps is more than just a club; it's a community driven by a shared enthusiasm for electronics, sustainability, and innovation. Our journey began with a common goal – to redefine the narrative around electronic waste and harness the potential within discarded technology. Bitscraps is not just a hub for tech enthusiasts; it's a dynamic space where creativity meets consciousness.</p>
                <p>As a club, we are committed to exploring the intersection of technology and sustainability. Through initiatives like hackathons, workshops, and electronics collection drives, we aim to bridge the gap between innovation and environmental responsibility. Our vibrant community welcomes individuals from all backgrounds, fostering an environment where learning, collaboration, and hands-on experiences thrive.</p>
            </div>
            <img
                src={Watch.src}
                alt="Image"
                className="w-full h-full object-cover brightness-50"
            />



            <div className="flex w-max-full relative justify-center bg-black py-20">
                <div>
                    <div className="w-full  bg-black py-5">
                        <div className="flex justify-center items-center">
                            <div className="py-20 m-12">
                                <h1 className="text-4xl font-bold uppercase text-orange-500 py-3"> ADVOCACY</h1>
                                <p className="text-lg font-light text-white py-3 text-justify">Bitscraps is a dynamic student organization fostering innovation and sustainability by repurposing electronic waste through workshops, hackathons, and educational initiatives.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel carousel-center max-w-md p-4 space-x-4 rounded-box bg-black h-50 mr-12">
                    <div className="carousel-item">
                        <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-box" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="rounded-box" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="rounded-box" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="rounded-box" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="rounded-box" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="rounded-box" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="rounded-box" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default services
