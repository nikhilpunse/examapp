import React from 'react'
import item from '../image/new item.jpg'
import ListingCard from './ListingCard'
import Menu from './Menu'

const Comp =()=>{
    return(
        <div>
             {/* carousel 1 */}
        <div id="carouselExampleControls" className="carousel slide relative" data-bs-ride="carousel">
        <div className="carousel-inner relative w-full overflow-hidden">
            <div className="carousel-item active relative float-left w-full">
            <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                className="block w-full"
                alt="Wild Landscape"
            />
            </div>
            <div className="carousel-item relative float-left w-full">
            <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                className="block w-full"
                alt="Camera"
            />
            </div>
            <div className="carousel-item relative float-left w-full">
            <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                className="block w-full"
                alt="Exotic Fruits"
            />
            </div>
        </div>
        <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
        >
            <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
        >
            <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>

        <p className='my-3 font-semibold sm:text-[30px]'>POPULAR CATEGORIES</p>
        
        <div className='flex flex-wrap justify-center items-center'>
            <img className='w-20 h-20 sm:w-32 sm:h-32' src={item}/>
            <img className='w-20 h-20 sm:w-32 sm:h-32' src={item}/>
            <img className='w-20 h-20 sm:w-32 sm:h-32' src={item}/>
            <img className='w-20 h-20 sm:w-32 sm:h-32' src={item}/>
            <img className='w-20 h-20 sm:w-32 sm:h-32' src={item}/>
            <img className='w-20 h-20 sm:w-32 sm:h-32' src={item}/>
        </div>
        {/* LISTINGS */}
        <p className='my-3 font-semibold sm:text-[30px]'>LISTINGS</p>

        <div className='flex flex-wrap justify-evenly'>
            <ListingCard/>
            <ListingCard/>
        </div>
        </div>)
}

const Home = () => {
  return (
    <div className='w-full text-center'>
        <div className='w-full text-[20px] sm:text-[26px] bg-blue-600 text-white rounded-md sm:rounded-none py-1 sm:py-3'>Home Screen</div>
        
        <Menu/>
        <Comp/>

        

    </div>
  )
}

export default Home