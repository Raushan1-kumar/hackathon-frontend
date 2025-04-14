import { AiFillHome } from "react-icons/ai";
import { MdMedicalServices, MdEmergency } from "react-icons/md";
import { CgProfile } from "react-icons/cg";


function Footer() {
    return ( 
        <>
         <div className="flex justify-between items-center py-3">
              <button
                onClick={() => (window.location.href = "/")}
                className="flex flex-col items-center space-y-1 w-16"
              >
                <AiFillHome className="text-2xl text-gray-900 dark:text-white" />
                <span className="text-xs text-gray-900 dark:text-white font-inter">
                  Home
                </span>
              </button>

              <button
                onClick={() => (window.location.href = "/emergency")}
                className="flex flex-col items-center space-y-1 w-16"
              >
                <MdEmergency className="text-2xl text-gray-900 dark:text-white" />
                <span className="text-xs text-gray-900 dark:text-white font-inter">
                  Emergency
                </span>
              </button>

              <button
                onClick={() => (window.location.href = "/records")}
                className="flex flex-col items-center space-y-1 w-16"
              >
                <MdMedicalServices className="text-2xl text-gray-900 dark:text-white" />
                <span className="text-xs text-gray-900 dark:text-white font-inter">
                  Medical
                </span>
              </button>

              <button
                onClick={() => (window.location.href = "/profile")}
                className="flex flex-col items-center space-y-1 w-16"
              >
                <CgProfile className="text-2xl text-gray-900 dark:text-white" />
                <span className="text-xs text-gray-900 dark:text-white font-inter">
                  Profile
                </span>
              </button>
            </div>
        </>
     );
}

export default Footer;