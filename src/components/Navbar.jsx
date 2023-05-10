import { Icon } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { BsSticky, BsCollectionPlay, BsUpload, BsBroadcast, BsFolder2, BsChevronDown, BsChevronUp } from "react-icons/bs/index"

export default () => {
    return (
        <div className="side-nav-bar h-auto flex flex-col px-6 py-6 bg-gray-200  justify-start items-left min-w-[200px]">
            <div className="ml-[-10px] mb-6 text-black flex items-center justify-start">
                <img src="brand.png" className='w-[40px] h-[40px]'></img>
                <h1 className='font-bold text-2xl'>wave.video</h1>
            </div>
            <div className="bg-white rounded-lg drop-shadow-myproject text-black flex items-center gap-2 mx-[-8%] px-4 py-2">
                <BsFolder2/>
                <h1 className='font-semibold'>My projects</h1>
            </div>
            <Link
                to=""
                className="my-4 text-gray-500 hover:text-sky-500 transition duration-700 ease-in-out flex gap-2"
            >
                <BsBroadcast size={20}/>
                <span className="text ml-2 text-xs tracking-wide font-medium">
                    My streams & reordings
                </span>
            </Link>
            <Link
                to=""
                className="my-4 text-gray-500 hover:text-sky-500 transition duration-700 ease-in-out flex gap-2"
            >
                <BsUpload />
                <span className="text ml-2 text-xs tracking-wide font-medium">
                    My Uploads
                </span>
            </Link>
            <div className='border border-t-0 full-width border-gray-400 my-4'></div>
            <Link
                to=""
                className="my-4 text-gray-500 hover:text-sky-500 transition duration-700 ease-in-out flex gap-2"
            >
                <BsCollectionPlay fontSize="medium" />
                <span className="text ml-2 text-xs tracking-wide font-medium">
                    Templates
                </span>
            </Link>
            <Link
                to=""
                className="my-4 text-gray-500 hover:text-sky-500 transition duration-700 ease-in-out flex gap-2 items-center"
            >
                <BsSticky fontSize="medium" />
                <span className="text ml-2 text-xs tracking-wide font-medium">
                    Resources
                </span>
                <BsChevronDown className='stroke-1 w-4 h-3 ml-2 pt-1'/>
            </Link>
            <Link
                to=""
                className="my-4 text-gray-500 hover:text-sky-500 transition duration-700 ease-in-out absolute bottom-2 flex items-center"
            >
                <img src="Avatar.png" className='w-[35px] h-[35px]'></img>
                <span className="text ml-2 text-xs tracking-wide font-medium">
                    Lucky Dev
                </span>
            </Link>
        </div>
    )
}