import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";



const Root = () => {
    const { isDarkMode } = useContext(AuthContext);
    return (
        <div style={{ background: isDarkMode ? "#282A3A" : "white" , color: isDarkMode ? "white" : "black" }}>
            <div className="max-w-screen-xl mx-auto">

                <Navbar></Navbar>

                <Outlet></Outlet>

                <Footer></Footer>

            </div>
        </div>
    );
};

export default Root;