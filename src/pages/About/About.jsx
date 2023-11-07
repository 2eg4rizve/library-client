
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import { useContext, useEffect } from 'react';

import { ScrollRestoration } from "react-router-dom";
import { AuthContext } from '../../AuthProvider/AuthProvider';


const About = () => {

    const { isDarkMode } = useContext(AuthContext);


    useEffect(() => {

        AOS.init();

    }, [])
    return (
        <div className="mt-[50px] px-[20px] text-center" data-aos="fade-up" style={{ background: isDarkMode ? "black" : "#99DBF5", color: isDarkMode ? "white" : "black" }}>

            <ScrollRestoration />

            <p className="text-5xl font-bold text-center mt-[40px] pt-[40px]">ABOUT</p>


            <p className="pt-[60px] pb-[40px]">

                Welcome to our Library Management System, a state-of-the-art solution designed to revolutionize how libraries operate and interact with their patrons. Libraries are more than just repositories of knowledge; they are dynamic hubs for learning, research, and community engagement. Our Library Management System recognizes the crucial role that libraries play and offers a range of features to enhance their functionality.

                <br />
                <br />

                The primary objective of this project is to provide librarians and library staff with a robust tool to manage their collections more efficiently. This system simplifies the process of cataloging books, tracking their availability, and streamlining the borrowing and returning of materials. It also offers advanced search and filtering options, making it easier for patrons to discover the resources they need.

                <br />
                <br />


                One of the most significant benefits of our Library Management System is the improvement it brings to the user experience. Patrons can register for library memberships, search for books, and manage their borrowing history with ease. The system sends timely notifications and alerts, ensuring that users are always informed about due dates and the availability of requested materials.

                <br />
                <br />

                In addition to these practical features, our system also includes reporting and analytics tools, allowing libraries to gain insights into circulation trends, popular genres, and user preferences. This data-driven approach empowers libraries to make informed decisions about resource allocation and collection development.




            </p>










        </div>
    );
};

export default About;