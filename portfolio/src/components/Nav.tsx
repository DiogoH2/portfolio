import { Link } from "react-router-dom"
import Expertise from "../pages/Expertise"
import Jobs from "../pages/Jobs"
import Sobre from "../pages/sobre"

export default function Nav() {
    return (
        <div className="flex flex-col h-full
       bg-black p-4">
            <div>
                <ul className="flex flex-row justify-center items-center text-white" >
                    <div className="hover:text-gray-500">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="hover:text-gray-500 px-5">
                        <Link to="/Jobs">Trabalho</Link>
                    </div>
                    <div className="hover:text-gray-500">
                    <Link to="/Expertise">Expertise</Link>
                    </div>
                </ul>
            </div>
        </div>
    )
}