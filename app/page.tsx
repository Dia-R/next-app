import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import Banner from './public/banner.jpg'
import Sidebar from './components/Sidebar'
import Logo from './public/logo.jpeg'


export default function Home() {
  return (
    <main>

      <div className="relative" style={{ zIndex: 999 }}>
        <video src={require('./public/video.mp4')} autoPlay muted loop className="m-0 flex h-full w-full object-fit-cover brightness-50" />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white">
          <p className="text-6xl font-bold ">
            BITSCRAPS
          </p>
        </div>
        <div className="absolute bottom-1/3 left-0 right-0 transform translate-y-1/2 text-center text-white">
          <p className="text-xl uppercase font-bold">
            From Bits To Brilliance
          </p>
        </div>
      </div>
      <div className="flex h-max-full relative">
        <div className="w-full max-h-full bg-black py-5">
          <div className="flex justify-center items-center">
            <div className="py-40 m-12">

              <h1 className="text-4xl font-bold uppercase text-orange-500 py-3"> Weekly Sessions</h1>
              <p className="text-lg font-light text-white py-3 text-justify">Bitscraps is a dynamic student organization fostering innovation and sustainability by repurposing electronic waste through workshops, hackathons, and educational initiatives.</p>
            </div>
          </div>
        </div>
        <div className="w-full max-h-full bg-black py-5">
          <div className="flex justify-center items-center">
            <div className="py-40 m-12">
              <h1 className="text-4xl font-bold uppercase text-orange-500 py-3"> Workshops</h1>
              <p className="text-lg font-light text-white py-3 text-justify">Bitscraps is a dynamic student organization fostering innovation and sustainability by repurposing electronic waste through workshops, hackathons, and educational initiatives.</p>
            </div>
          </div>
        </div>
        <div className="w-full max-h-full bg-black py-5">
          <div className="flex justify-center items-center">
            <div className="py-40 m-12">
              <h1 className="text-4xl font-bold uppercase text-orange-500 py-3"> Hackathons</h1>
              <p className="text-lg font-light text-white py-3 text-justify">Bitscraps is a dynamic student organization fostering innovation and sustainability by repurposing electronic waste through workshops, hackathons, and educational initiatives.</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div>

        <Link href="/users" >Users</Link>
        <ProductCard />
      </div> */}

    </main >
  )
}
