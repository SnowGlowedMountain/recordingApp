import { Link } from "react-router-dom";
import Layout from "../../components/Layout1";
import { BsCameraVideoOff, BsMicMute, BsShare, BsPersonAdd, BsSliders, BsOption, BsSdCard, BsPersonSquare,BsPlus, BsClipboard} from "react-icons/bs/index"

const Interview = () => {
    return (
        <div>
            <Layout
                toolbar={Toolbar}
                sidebar={Sidebar}
            >
                <div className="p-4 pl-20">
                    <div className="bg-sky-300 h-[500px]"></div>
                    <div className="flex justify-center">
                        <div className="rounded-lg bg-white inline-flex flex-wrap mt-2 gap-4 justify-center items-stretch px-5 drop-shadow-control_panel">
                            <div className="h-[60px] flex flex-col justify-center items-center gap-1 cursor-pointer">
                                <BsMicMute size={20} className="text-red-600" />
                                <p className="text-gray-800 text-sm">Unmute</p>
                            </div>
                            <div className="h-[60px] flex flex-col justify-center items-center gap-1 cursor-pointer">
                                <BsCameraVideoOff size={20} className="text-red-600" />
                                <p className="text-gray-800 text-sm">Start video</p>
                            </div>
                            <div className="h-[60px] flex flex-col justify-center items-center gap-1 cursor-pointer">
                                <BsShare size={20} className="text-gray-600" />
                                <p className="text-gray-800 text-sm">Share</p>
                            </div>
                            <div className="h-[60px] flex flex-col justify-center items-center gap-1 cursor-pointer">
                                <BsPersonAdd size={20} className="text-gray-600" />
                                <p className="text-gray-800 text-sm">Invite</p>
                            </div>
                            <div className="h-[60px] flex flex-col justify-center items-center gap-1 cursor-pointer">
                                <BsOption size={20} className="text-gray-600" />
                                <p className="text-gray-800 text-sm">Slides</p>
                            </div>
                            <div className="h-[60px] flex flex-col justify-center items-center gap-1 cursor-pointer">
                                <BsSliders size={20} className="text-gray-600" />
                                <p className="text-gray-800 text-sm">Settings</p>
                            </div>
                            <div className="h-[60px] flex flex-col justify-center items-center gap-1 cursor-pointer">
                                <BsSdCard size={20} className="text-gray-600" />
                                <p className="text-gray-800 text-sm">Comments</p>
                            </div>
                            <div className="h-[60px] flex flex-col justify-center items-center gap-1 cursor-pointer">
                                <BsPersonSquare size={20} className="text-gray-600" />
                                <p className="text-gray-800 text-sm">16:9</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>

    );
}
const Toolbar = (
    <>
        <div className="flex justify-between items-center px-4 h-full">
            <div className="flex items-center gap-6 h-full">
                <div className="flex justify-stretch items-center gap-1">
                    <img src="brand.png" className='w-[40px] h-[40px]'></img>
                    <span className='font-bold text-2xl'>wave.video</span>
                    <span className='text-2xl'>live</span>
                </div>
                <span className='text-sm text-gray-500 pt-2'>Rcording 2023-05-10 11:03:44</span>
            </div>
            <div className="flex gap-2">
                <button className="border-2 border-gray-400 px-8 py-2 mt-4 mb-4 rounded text-gray-900 bg-gray-100 hover:outline-none  transition duration-300 ease-in-out ">
                    <div className="flex items-center gap-2">
                        Leave
                    </div>
                </button>
                <button className="border-2 border-red-500 px-8 py-2 mt-4 mb-4 rounded text-red-900 bg-red-500 hover:outline-none hover:border-red-500  transition duration-300 ease-in-out ">
                    <div className="flex items-center text-white gap-2">
                        Start recording
                    </div>
                </button>
            </div>
        </div>
    </>
)
const Sidebar = (
    <>
        <div className="flex justify-between mt-4 pl-4 pr-8">
            <h1 className="text-lg font-bold text-gray-700">Scenes</h1>
            <div className="flex items-center gap-1 text-sky-500">
                <BsPlus size={30}/>
                <BsClipboard size={20}/>
            </div>
        </div>
    </>
);
export default Interview;