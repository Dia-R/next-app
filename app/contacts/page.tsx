import React from 'react'
import Wire from '../public/wire.jpg'

const contacts = () => {
    return (
        <div>
            <div>
                <div className="relative">
                    <img src={Wire.src} alt="Image" className="object-cover m-0 flex h-full w-full object-fit-cover brightness-50" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white">
                        <p className="text-6xl font-bold ">
                            CONTACT US
                        </p>
                    </div>
                    <div className="absolute bottom-1/3 left-0 right-0 transform translate-y-1/2 text-center text-white">
                        <p className="text-xl uppercase font-bold">
                            ANYTHING YOU'D LIKE TO ASK?
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex bg-black justify-center text-centre py-10'>
                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className="chat-header text-gray-400">
                        Bitscraps
                        <time className="text-xs opacity-50 px-3">12:45</time>
                    </div>
                    <div className="chat-bubble text-xl">Reach out to us through email.</div>
                    <div className="chat-footer opacity-50">
                        Delivered
                    </div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className="chat-header">
                        Anakin
                        <time className="text-xs opacity-50">12:46</time>
                    </div>
                    <div className="chat-bubble text-xl">
                        <p className='pr-12'>
                            bitscraps@gmail.com
                        </p></div>
                    <div className="chat-footer opacity-50">
                        Seen at 12:46
                    </div>
                </div>
            </div>

        </div>
    )
}

export default contacts
