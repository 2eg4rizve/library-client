import { Link } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import { useContext, useEffect } from "react";

import { ScrollRestoration } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const ContactUs = () => {

    const { isDarkMode } = useContext(AuthContext);

    useEffect(() => {

        AOS.init();

    }, [])
    return (
        <div className="my-[50px] bg-[#99DBF5] p-[20px]" style={{ background: isDarkMode ? "black" : "#99DBF5" , color: isDarkMode ? "white" : "black" }} data-aos = "fade-up">
        <ScrollRestoration />
        <h1 className="font-bold text-center text-5xl">Contact Us</h1>
        <div className="flex flex-col lg:flex-row pb-[50px]">
            <div className="flex-1 flex justify-center items-center">


                <div className="mt-[80px] font-bold">
                    <p>Mobile : 01611111111</p>
                    <p>  Mobile : 01722222222</p>
                    <p> Mobile : 01833333333</p>
                    <br />
                    <p>Phone : 01944444444</p>
                    <p>Phone : 01955555555</p>
                    <br />
                    <div className="flex">
                        <p>Facebook : </p>
                        <Link className="text-blue-600 ml-[10px]">Riz@gmail.com</Link>

                    </div>

                    <div className="flex">
                        <p>FaceBook : </p>
                        <Link className="text-blue-600  ml-[10px]">2eg4rizve@gmail.com</Link>

                    </div>
                    <br />
                    <div className="flex">
                        <p>Email : </p>
                        <Link className="text-blue-600 ml-[10px]">Riz@gmail.com</Link>

                    </div>

                    <div className="flex">
                        <p>Email : </p>
                        <Link className="text-blue-600  ml-[10px]">2eg4rizve@gmail.com</Link>

                    </div>

                </div>

            </div>
            <div className="flex-1 text-black" >

                <div className="mt-[100px] space-y-3">
                    <input type="text" placeholder="Enter Your Name" className="input input-bordered w-full max-w-xs  border-2" style={{ background: isDarkMode ? "#2C3333" : "white" , color: isDarkMode ? "white" : "black"} }/>
                    <br />
                    <input type="text" placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs  border-2"  style={{ background: isDarkMode ? "#2C3333" : "white" , color: isDarkMode ? "white" : "black"} } />

                    <textarea  style={{ background: isDarkMode ? "#2C3333" : "white" , color: isDarkMode ? "white" : "black"} } className="textarea border-2 w-full min-h-[200px]  input-bordered " placeholder="Type Your Message"></textarea>

                    <button className="btn btn-primary w-full">Submit</button>

                </div>

            </div>
        </div>


    </div>
    );
};

export default ContactUs;