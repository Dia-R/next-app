import React from 'react'
import Banner from '../public/about.jpg'
import Watch from '../public/watch.jpg'



const about = () => {
    return (
        <div className='bg-black'>

            <div className="relative">
                <img src={Banner.src} alt="Image" className="object-cover m-0 flex h-full w-full object-fit-cover brightness-50" />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white">
                    <p className="text-6xl font-bold ">
                        ABOUT US
                    </p>
                </div>
                <div className="absolute bottom-1/3 left-0 right-0 transform translate-y-1/2 text-center text-white">
                    <p className="text-xl uppercase font-bold">
                        WHO ARE WE?
                    </p>
                </div>
            </div>
            <div className="pt-20 m-12">
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


            <div className='w-full max-h-full bg-black py-10 text-center justify-center'>
                <h1 className="text-4xl font-bold uppercase text-orange-500 pt-20 text-center justify-center"> MEET THE TEAM</h1>

            </div>
            <div className="flex w-max-full relative m-20 pl-10">

                <div className="w-full max-h-full bg-black py-10">
                    <div className="flex justify-center items-center">
                        <div className="avatar">
                            <div className="w-24 rounded">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="px-4">
                            <p className="text-white "> NAME | POSITION </p>
                            <p className="text-white">
                                Y2 Electrical Engineering Undergraduate with a Minor in Artificial Intelligence
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full max-h-full bg-black py-10">
                    <div className="flex justify-center items-center">
                        <div className="avatar">
                            <div className="w-24 rounded">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="px-4">
                            <p className="text-white "> NAME | POSITION </p>
                            <p className="text-white">
                                Y2 Electrical Engineering Undergraduate with a Minor in Artificial Intelligence
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full max-h-full bg-black py-10">
                    <div className="flex justify-center items-center">
                        <div className="avatar">
                            <div className="w-24 rounded">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="px-4">
                            <p className="text-white "> NAME | POSITION </p>
                            <p className="text-white">
                                Y2 Electrical Engineering Undergraduate with a Minor in Artificial Intelligence
                            </p>
                        </div>
                    </div>
                </div>


            </div>
            <div className="flex w-max-full relative m-20 pl-10">

                <div className="w-full max-h-full bg-black py-10">
                    <div className="flex justify-center items-center">
                        <div className="avatar">
                            <div className="w-24 rounded">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="px-4">
                            <p className="text-white "> NAME | POSITION </p>
                            <p className="text-white">
                                Y2 Electrical Engineering Undergraduate with a Minor in Artificial Intelligence
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full max-h-full bg-black py-10">
                    <div className="flex justify-center items-center">
                        <div className="avatar">
                            <div className="w-24 rounded">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="px-4">
                            <p className="text-white "> NAME | POSITION </p>
                            <p className="text-white">
                                Y2 Electrical Engineering Undergraduate with a Minor in Artificial Intelligence
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full max-h-full bg-black py-10">
                    <div className="flex justify-center items-center">
                        <div className="avatar">
                            <div className="w-24 rounded">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="px-4">
                            <p className="text-white "> NAME | POSITION </p>
                            <p className="text-white">
                                Y2 Electrical Engineering Undergraduate with a Minor in Artificial Intelligence
                            </p>
                        </div>
                    </div>
                </div>


            </div>
            <div className="flex w-max-full relative m-20 bg-black pl-10">

                <div className="w-full max-h-full bg-black py-10">
                    <div className="flex justify-center items-center">
                        <div className="avatar">
                            <div className="w-24 rounded">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="px-4">
                            <p className="text-white "> NAME | POSITION </p>
                            <p className="text-white">
                                Y2 Electrical Engineering Undergraduate with a Minor in Artificial Intelligence
                            </p>
                        </div>

                    </div>
                </div>


                <div className="w-full max-h-full bg-black py-10">
                    <div className="flex justify-center items-center">
                        <div className="avatar">
                            <div className="w-24 rounded">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="px-4">
                            <p className="text-white "> NAME | POSITION </p>
                            <p className="text-white">
                                Y2 Electrical Engineering Undergraduate with a Minor in Artificial Intelligence
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full max-h-full bg-black py-10">
                    <div className="flex justify-center items-center">
                        <div className="avatar">
                            <div className="w-24 rounded">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="px-4">
                            <p className="text-white "> NAME | POSITION </p>
                            <p className="text-white">
                                Y2 Electrical Engineering Undergraduate with a Minor in Artificial Intelligence
                            </p>
                        </div>
                    </div>

                </div>


            </div>
            <div className='w-full max-h-full bg-black py-10 text-center justify-center'>

            </div>
        </div>

    )
}

export default about
