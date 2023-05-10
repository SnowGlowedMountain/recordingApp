import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import { BsFolderPlus, BsUpload, BsPlusLg } from "react-icons/bs/index"

const Interview = () => {
    return (
        <div>
            <Layout>
                <div className="">
                    My Projects
                </div>
                <div className="mt-10 flex flex-wrap">
                    <Link to="/live">
                        <button className="border-2 border-sky-500 bg-sky-500 shadow-xl shadow-sky-500/20 px-8 py-2 mt-4 mb-4 rounded text-gray-100 hover:outline-none hover:shadow-lg hover:shadow-sky-500/50 mr-2">
                            <div className="flex items-center gap-2">
                                <BsPlusLg /> Create
                            </div>
                        </button>
                    </Link>
                    <button className="border-2 border-sky-500 shadow-xl shadow-sky-500/20 px-8 py-2 mt-4 mb-4 rounded text-sky-500 hover:outline-none hover:shadow-lg hover:shadow-sky-500/50 mr-2">
                        <div className="flex items-center gap-2">
                            <BsUpload />Upload Video
                        </div>
                    </button>
                    <button className="border-2 border-sky-500 shadow-xl shadow-sky-500/20 px-8 py-2 mt-4 mb-4 rounded text-sky-500 hover:outline-none hover:shadow-lg hover:shadow-sky-500/50 mr-2">
                        <div className="flex items-center gap-2">
                            <BsFolderPlus />New Folder
                        </div>
                    </button>
                </div>
            </Layout>
        </div>

    );
}
const Button = ({ title }) => {
    return (
        <button className="bg-sky-500 shadow-xl shadow-sky-500/20 px-5 py-2 mt-4 mb-4 rounded text-gray-100 hover:outline-none hover:shadow-lg hover:shadow-sky-500/50">
            {title}
        </button>
    )
}
export default Interview;